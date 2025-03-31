import { Title } from "@solidjs/meta";
import { useNavigate, useParams } from "@solidjs/router";
import {
	createSignal,
	createEffect,
	onMount,
	For,
	Show,
	createMemo,
} from "solid-js";
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
import { FiX, FiArrowLeft, FiArrowRight } from "solid-icons/fi";

const toaster = Toast.createToaster({
	placement: "bottom-end",
	overlap: true,
	gap: 16,
});

export default function TaskPage() {
	const navigate = useNavigate();
	const params = useParams();

	const [isHydrated, setIsHydrated] = createSignal(false);
	onMount(() => setIsHydrated(true));

	const taskContext = createMemo(() => {
		const { topicId, subtopics, taskId } = params;

		const topic = quizData.find((t) => t.topicId === topicId);
		if (!topic)
			return { topic: null, subtopic: null, task: null, taskIndex: -1 };

		const subtopic = topic.subtopics.find(
			(st) => st.subtopicId === subtopics,
		);
		if (!subtopic)
			return { topic, subtopic: null, task: null, taskIndex: -1 };

		const taskIndex = subtopic.tasks.findIndex((t) => t.id === taskId);
		if (taskIndex === -1)
			return { topic, subtopic, task: null, taskIndex: -1 };

		const task = subtopic.tasks[taskIndex];
		return { topic, subtopic, task, taskIndex };
	});

	const [userAnswers, setUserAnswers] = createSignal<string[]>([]);

	const getTaskNumber = createMemo(() => {
		const { task, taskIndex } = taskContext();
		if (task) return taskIndex + 1;
		return 0;
	});

	createEffect(() => {
		const currentTask = taskContext().task;
		if (currentTask) {
			setUserAnswers(Array(currentTask.parts.length).fill(""));
		}
	});

	createEffect(() => {
		if (taskContext().task === null) {
			navigate("/404", { replace: true });
		}
	});

	const [solved, setSolved] = createSignal(false);

	createEffect(() => {
		if (isHydrated() && taskContext().task) {
			setSolved(isTaskSolved(params.taskId));
		}
	});

	const prevTaskId = createMemo(() => {
		const { subtopic, taskIndex } = taskContext();
		if (!subtopic || taskIndex <= 0) return null;
		return subtopic.tasks[taskIndex - 1].id;
	});

	const nextTaskId = createMemo(() => {
		const { subtopic, taskIndex } = taskContext();
		if (
			!subtopic ||
			taskIndex === -1 ||
			taskIndex >= subtopic.tasks.length - 1
		)
			return null;
		return subtopic.tasks[taskIndex + 1].id;
	});

	const goToPrevTask = () => {
		const prevId = prevTaskId();
		if (prevId) {
			navigate(
				`/topics/${params.topicId}/subtopics/${params.subtopics}/tasks/${prevId}`,
			);
		}
	};

	const goToNextTask = () => {
		const nextId = nextTaskId();
		if (nextId) {
			navigate(
				`/topics/${params.topicId}/subtopics/${params.subtopics}/tasks/${nextId}`,
			);
		}
	};

	const goToSubtopic = () => {
		navigate(`/topics/${params.topicId}/subtopics/${params.subtopics}`);
	};

	const handleAnswerChange = (index: number, value: string) => {
		setUserAnswers((prev) => {
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
	};

	const checkAnswers = () => {
		const currentTask = taskContext().task;
		if (!currentTask) return;

		const { parts } = currentTask;
		const allCorrect = parts.every((part, index) => {
			const userAnswer = userAnswers()[index]?.trim().toLowerCase() || "";
			const correct = part.answer;

			if (Array.isArray(correct)) {
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
			addSolvedTask(params.taskId);
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
			<Show when={taskContext().task} fallback={<div>Загрузка...</div>}>
				{(task) => (
					<>
						<Title>{task().title}</Title>
						<Heading as="h2" size="4xl">
							{task().title}{" "}
							<span
								style={{ "font-size": "0.8em", color: "#666" }}
							>
								(Задача {getTaskNumber()} из{" "}
								{taskContext().subtopic?.tasks?.length || 0})
							</span>
						</Heading>
						<Show when={solved()}>
							<Text style={{ color: "limegreen" }}>
								Эта задача уже решена!
							</Text>
						</Show>
						<Text innerHTML={task().question} />
						<Show when={task().images?.length}>
							<For each={task().images}>
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
						<Show
							when={isHydrated()}
							fallback={<div>Загрузка...</div>}
						>
							<For each={task().parts}>
								{(part, i) => (
									<div
										style={{
											"margin-top": "1rem",
											"padding-bottom": "1rem",
											"border-bottom": "1px solid #ccc",
										}}
									>
										<Text>
											<b>Часть {i() + 1}:</b>{" "}
											{part.question || ""}
										</Text>

										<Show
											when={["input", "select"].includes(
												part.type,
											)}
										>
											<Input
												type="text"
												placeholder="Ваш ответ"
												value={userAnswers()[i()] || ""}
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
												value={userAnswers()[i()] || ""}
												onValueChange={(details) =>
													handleAnswerChange(
														i(),
														details.value || "",
													)
												}
											>
												<For each={part.options}>
													{(opt) => (
														<RadioGroup.Item
															value={opt.text}
														>
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
													<label
														style={{
															display: "block",
														}}
													>
														<Checkbox
															name={`part-${i()}`}
															value={opt.text}
															checked={(
																userAnswers()[
																	i()
																] || ""
															)
																.split(";")
																.includes(
																	opt.text,
																)}
															onCheckedChange={(
																details,
															) => {
																const current =
																	(
																		userAnswers()[
																			i()
																		] || ""
																	)
																		.split(
																			";",
																		)
																		.filter(
																			Boolean,
																		);
																if (
																	details.checked
																) {
																	handleAnswerChange(
																		i(),
																		[
																			...current,
																			opt.text,
																		].join(
																			";",
																		),
																	);
																} else {
																	handleAnswerChange(
																		i(),
																		current
																			.filter(
																				(
																					v,
																				) =>
																					v !==
																					opt.text,
																			)
																			.join(
																				";",
																			),
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

							<div
								style={{
									"margin-top": "1.5rem",
									display: "flex",
									gap: "1rem",
								}}
							>
								<Button
									onClick={goToPrevTask}
									disabled={!prevTaskId()}
									variant="outline"
								>
									<FiArrowLeft
										style={{ "margin-right": "0.5rem" }}
									/>
									Предыдущая задача
								</Button>

								<Button
									onClick={checkAnswers}
									disabled={solved()}
								>
									Проверить ответы
								</Button>

								<Button
									onClick={goToNextTask}
									disabled={!nextTaskId()}
									variant="outline"
								>
									Следующая задача
									<FiArrowRight
										style={{ "margin-left": "0.5rem" }}
									/>
								</Button>
							</div>

							<Button
								style={{
									"margin-top": "1rem",
								}}
								onClick={goToSubtopic}
								variant="subtle"
							>
								Назад к списку
							</Button>
						</Show>
					</>
				)}
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
