import { Title } from "@solidjs/meta";
import { useParams, A, useNavigate } from "@solidjs/router";
import { For, Show } from "solid-js";
import { quizData } from "~/task/data";
import { Link } from "~/components/ui/link";
import { Heading } from "~/components/ui/heading";
import { Icon } from "~/components/ui/icon";
import { isTaskSolved, isTaskWrongSolved } from "~/utils/localStorage";
import { createSignal, onMount, createEffect } from "solid-js";
import { FiCheck, FiCircle, FiX } from "solid-icons/fi";

export default function SubtopicPage() {
	const navigate = useNavigate();
	const params = useParams();
	const { topicId, subtopics } = params;

	const [isHydrated, setIsHydrated] = createSignal(false);
	onMount(() => setIsHydrated(true));

	const [solved, setSolved] = createSignal(false);

	const currentTopic = quizData.find((t) => t.topicId === topicId);
	if (!currentTopic) {
		navigate("/404", { replace: true });
		return null;
	}

	const currentSubtopic = currentTopic.subtopics.find(
		(st) => st.subtopicId === subtopics,
	);
	if (!currentSubtopic) {
		navigate("/404", { replace: true });
		return null;
	}
	const { tasks } = currentSubtopic;

	return (
		<main>
			<Title>Подтема: {currentSubtopic.title}</Title>
			<Heading>Подтема: {currentSubtopic.title}</Heading>

			{tasks.length > 0 ? (
				<ul>
					<For each={tasks}>
						{(task, i) => (
							<li
								style={{
									display: "flex",
									"flex-wrap": "nowrap",
									"align-items": "center",
								}}
							>
								<Show
									when={
										isHydrated() &&
										!isTaskSolved(task.id) &&
										!isTaskWrongSolved(task.id)
									}
								>
									<Icon>
										<FiCircle />
									</Icon>{" "}
								</Show>
								<Show when={isHydrated()}>
									<Show when={isTaskSolved(task.id)}>
										<Icon>
											<FiCheck color="limegreen" />
										</Icon>{" "}
									</Show>
									<Show when={isTaskWrongSolved(task.id)}>
										<Icon>
											<FiX color="red" />
										</Icon>{" "}
									</Show>
								</Show>

								<Link
									href={`/topics/${topicId}/subtopics/${subtopics}/tasks/${task.id}`}
								>
									{`${i() + 1} - `}
									{task.title}
								</Link>
							</li>
						)}
					</For>
				</ul>
			) : (
				<p>Нет задач в данной подтеме.</p>
			)}
		</main>
	);
}
