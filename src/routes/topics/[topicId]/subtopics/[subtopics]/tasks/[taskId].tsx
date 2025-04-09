import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { createSignal, createEffect, onMount, Show } from "solid-js";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { Toast } from "~/components/ui/toast";
import { TaskParts } from "~/components/task/TaskParts";
import { TaskImages } from "~/components/task/TaskImages";
import { TaskNavigation } from "~/components/task/TaskNavigation";
import { TaskToaster } from "~/components/task/TaskToaster";
import { TaskProvider, useTaskContext } from "~/contexts/TaskContext";
import {
	addSolvedTask,
	isTaskSolved,
	addWrongSolvedTask,
	isTaskWrongSolved,
} from "~/utils/localStorage";
import FormulaRenderer from "~/components/FormulaRenderer";
import { checkAnswers } from "~/services/TaskService";

const toaster = Toast.createToaster({
	placement: "bottom-end",
	overlap: true,
	gap: 16,
});

function TaskPageContent() {
	const navigate = useNavigate();
	const {
		task,
		taskNumber,
		totalTasks,
		prevTaskId,
		nextTaskId,
		goToPrevTask,
		goToNextTask,
		goToSubtopic,
	} = useTaskContext();

	const [isHydrated, setIsHydrated] = createSignal(false);
	const [userAnswers, setUserAnswers] = createSignal<string[]>([]);
	const [solved, setSolved] = createSignal(false);

	onMount(() => setIsHydrated(true));

	createEffect(() => {
		if (task() === null) {
			navigate("/404", { replace: true });
		}
	});

	createEffect(() => {
		if (isHydrated() && task()) {
			setSolved(
				isTaskSolved(task()!.id) || isTaskWrongSolved(task()!.id),
			);
		}
	});

	createEffect(() => {
		if (solved()) {
			setUserAnswers(
				task()?.parts.map((part) =>
					typeof part.answer === "string"
						? part.answer
						: part.answer.join(";"),
				) || [],
			);
		} else {
			setUserAnswers(Array(task()!.parts.length).fill(""));
		}
		console.log(userAnswers);
	});

	const handleAnswerChange = (index: number, value: string) => {
		setUserAnswers((prev) => {
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
		console.log(userAnswers);
	};

	const handleCheckAnswers = () => {
		const currentTask = task();
		if (!currentTask) return;

		const allCorrect = checkAnswers(currentTask, userAnswers());

		if (allCorrect) {
			addSolvedTask(currentTask.id);
			setSolved(true);
			toaster.create({
				title: "Правильно",
				description: "Задача решена верно",
				type: "success",
			});
		} else {
			addWrongSolvedTask(currentTask.id);
			setSolved(true);
			toaster.create({
				title: "Неправильно",
				description: "Попробуйте еще раз",
				type: "error",
			});
		}
	};

	return (
		<main>
			<Show when={task()} fallback={<div>Загрузка...</div>}>
				{(currentTask) => (
					<>
						<TaskNavigation
							prevEnabled={!!prevTaskId()}
							nextEnabled={!!nextTaskId()}
							checkEnabled={!solved()}
							onPrev={goToPrevTask}
							onNext={goToNextTask}
							onCheck={handleCheckAnswers}
							onBack={goToSubtopic}
						/>
						<Title>{currentTask().title}</Title>
						<Heading as="h2" size="4xl">
							{currentTask().title}{" "}
							<span
								style={{ "font-size": "0.8em", color: "#666" }}
							>
								(Задача {taskNumber()} из {totalTasks()})
							</span>
						</Heading>

						<Show when={solved()}>
							<Show when={isTaskSolved(task()!.id)}>
								<Text style={{ color: "limegreen" }}>
									Эта задача уже решена!
								</Text>
							</Show>
							<Show when={isTaskWrongSolved(task()!.id)}>
								<Text style={{ color: "red" }}>
									Эта задача уже решена!
								</Text>
							</Show>
						</Show>

						<Show
							when={isHydrated()}
							fallback={<div>Загрузка...</div>}
						>
							<Text>
								<FormulaRenderer
									formula={currentTask().question}
									display={true}
								/>
							</Text>

							<TaskImages images={currentTask().images} />

							<TaskParts
								parts={currentTask().parts}
								userAnswers={userAnswers()}
								onChange={handleAnswerChange}
								disabled={solved()}
							/>
						</Show>
					</>
				)}
			</Show>

			<TaskToaster toaster={toaster} />
		</main>
	);
}

export default function TaskPage() {
	return (
		<TaskProvider>
			<TaskPageContent />
		</TaskProvider>
	);
}
