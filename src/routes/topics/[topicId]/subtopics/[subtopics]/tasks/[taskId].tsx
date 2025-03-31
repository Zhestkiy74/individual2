import { Title } from "@solidjs/meta";
import { useNavigate, useParams } from "@solidjs/router";
import { createSignal, createEffect, onMount, For, Show } from "solid-js";
import { quizData } from "~/task/data";
import { Heading } from "~/components/ui/heading";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { RadioGroup } from "~/components/ui/radio-group";
import { Checkbox } from "~/components/ui/checkbox";
import { Toast } from "~/components/ui/toast";
import { IconButton } from "~/components/ui/icon-button";
import { addSolvedTask, isTaskSolved } from "~/utils/localStorage";
import { FiX } from "solid-icons/fi";

const toaster = Toast.createToaster({
	placement: "bottom-end",
	overlap: true,
	gap: 16,
});

export default function TaskPage() {
	const navigate = useNavigate();
	const { topicId, subtopics, taskId } = useParams();

	const [isHydrated, setIsHydrated] = createSignal(false);
	onMount(() => setIsHydrated(true));

	const findCurrentTask = () => {
		const topic = quizData.find((t) => t.topicId === topicId);
		if (!topic) return null;

		const subtopic = topic.subtopics.find(
			(st) => st.subtopicId === subtopics,
		);
		if (!subtopic) return null;

		const task = subtopic.tasks.find((t) => t.id === taskId);
		if (!task) return null;

		return task;
	};

	const currentTask = findCurrentTask();
	if (!currentTask) {
		navigate("/404", { replace: true });
		return null;
	}

	// Проверяем, решена ли задача
	const [solved, setSolved] = createSignal(false);
	createEffect(() => {
		if (isHydrated()) setSolved(isTaskSolved(taskId));
	});

	const { title, question, images, parts } = currentTask;

	const [userAnswers, setUserAnswers] = createSignal<string[]>(
		Array(parts.length).fill(""),
	);

	const handleAnswerChange = (index: number, value: string) => {
		setUserAnswers((prev) => {
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
	};

	const checkAnswers = () => {
		const allCorrect = parts.every((part, index) => {
			const userAnswer = userAnswers()[index].trim().toLowerCase();
			const correct = part.answer;

			if (Array.isArray(correct)) {
				// Используем разделитель ";"
				const userArray = userAnswer.split(";").map((s) => s.trim());
				return (
					userArray.length === correct.length &&
					correct.every((ans) =>
						userArray.includes(ans.trim().toLowerCase()),
					)
				);
			} else {
				return userAnswer === correct.trim().toLowerCase();
			}
		});

		if (allCorrect) {
			addSolvedTask(taskId);
			setSolved(true);
			toaster.create({
				title: "Правильно",
				description: "Задача решена верно",
				type: "success",
			});
		} else {
			toaster.create({
				title: "Неправильно",
				description: "Попробуйте еще раз",
				type: "error",
			});
		}
	};

	return (
		<main>
			<Title>{title}</Title>
			<Heading>{title}</Heading>

			<Show when={solved()}>
				<Text style={{ color: "limegreen" }}>
					Эта задача уже решена!
				</Text>
			</Show>

			<Text innerHTML={question} />

			<Show when={images?.length}>
				<For each={images}>
					{(imgSrc) => (
						<div>
							<img
								src={`/tasks/${imgSrc}`}
								alt="Task illustration"
							/>
						</div>
					)}
				</For>
			</Show>

			<Show when={isHydrated()} fallback={<div>Загрузка...</div>}>
				<For each={parts}>
					{(part, i) => (
						<div
							style={{
								"margin-top": "1rem",
								"padding-bottom": "1rem",
								"border-bottom": "1px solid #ccc",
							}}
						>
							<Text>
								<b>Часть {i() + 1}:</b> {part.question || ""}
							</Text>

							<Show
								when={["input", "select"].includes(part.type)}
							>
								<Input
									type="text"
									placeholder="Ваш ответ"
									value={userAnswers()[i()]}
									onInput={(e) =>
										handleAnswerChange(
											i(),
											e.currentTarget.value,
										)
									}
								/>
							</Show>

							<Show when={part.type === "radio"}>
								<RadioGroup.Root
									name={`part-${i()}`}
									value={userAnswers()[i()]}
									onValueChange={(details) =>
										handleAnswerChange(
											i(),
											details.value || "",
										)
									}
								>
									<For each={part.options}>
										{(opt) => (
											<RadioGroup.Item value={opt.text}>
												<RadioGroup.ItemControl />
												<RadioGroup.ItemText>
													{opt.text}
												</RadioGroup.ItemText>
												<RadioGroup.ItemHiddenInput />
											</RadioGroup.Item>
										)}
									</For>
								</RadioGroup.Root>
							</Show>

							<Show when={part.type === "checkbox"}>
								<For each={part.options}>
									{(opt) => (
										<label style={{ display: "block" }}>
											<Checkbox
												name={`part-${i()}`}
												value={opt.text}
												checked={userAnswers()
													[i()].split(";")
													.includes(opt.text)}
												onCheckedChange={(details) => {
													const current =
														userAnswers()
															[i()].split(";")
															.filter(Boolean);
													if (details.checked) {
														handleAnswerChange(
															i(),
															[
																...current,
																opt.text,
															].join(";"),
														);
													} else {
														handleAnswerChange(
															i(),
															current
																.filter(
																	(v) =>
																		v !==
																		opt.text,
																)
																.join(";"),
														);
													}
												}}
											>
												{opt.text}
											</Checkbox>
										</label>
									)}
								</For>
							</Show>
						</div>
					)}
				</For>

				<Button
					style={{
						"margin-top": "1rem",
					}}
					onClick={checkAnswers}
					disabled={solved()}
				>
					Проверить ответы
				</Button>
				<Button
					style={{
						"margin-top": "1rem",
						"margin-left": "1rem",
					}}
					onClick={() => navigate(-1)}
					variant="subtle"
				>
					Назад
				</Button>
			</Show>
			<Toast.Toaster toaster={toaster}>
				{(toast) => (
					<Toast.Root>
						<Toast.Title>{toast().title}</Toast.Title>
						<Toast.Description>
							{toast().description}
						</Toast.Description>
						<Toast.CloseTrigger
							asChild={(closeProps) => (
								<IconButton
									{...closeProps()}
									size="sm"
									variant="link"
								>
									<FiX />
								</IconButton>
							)}
						/>
					</Toast.Root>
				)}
			</Toast.Toaster>
		</main>
	);
}
