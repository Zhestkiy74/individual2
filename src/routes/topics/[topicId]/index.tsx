// src/routes/topics/[topicId]/index.tsx

import { Title } from "@solidjs/meta";
import { useParams, useNavigate } from "@solidjs/router";
import { For } from "solid-js";
import { quizData } from "~/task/data";
import { Link } from "~/components/ui/link";
import { Heading } from "~/components/ui/heading";

export default function TopicPage() {
	const navigate = useNavigate();
	const params = useParams();
	const { topicId } = params;

	const currentTopic = quizData.find((topic) => topic.topicId === topicId);
	if (!currentTopic) {
		navigate("/404", { replace: true });
		return null;
	}

	const { subtopics } = currentTopic;

	return (
		<main>
			<Title>Тема: {currentTopic.title}</Title>
			<Heading>Тема: {currentTopic.title}</Heading>

			{subtopics.length > 0 ? (
				<ul>
					<For each={subtopics}>
						{(subtopic) => (
							<li>
								<Link
									href={`/topics/${topicId}/subtopics/${subtopic.subtopicId}`}
								>
									{subtopic.title}
								</Link>
							</li>
						)}
					</For>
				</ul>
			) : (
				<p>Нет подтем в данной теме.</p>
			)}
		</main>
	);
}
