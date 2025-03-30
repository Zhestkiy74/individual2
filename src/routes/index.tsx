import { Title } from "@solidjs/meta";
import { FiChevronUp } from "solid-icons/fi";
import { Accordion } from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";
import { Link } from "~/components/ui/link";
import { Heading } from "~/components/ui/heading";
import { quizData } from "~/task/data";
import { For } from "solid-js";

export default function Home() {
	return (
		<main>
			<Title>Математика (СПО)</Title>
			<Heading as="h1" size="xl">
				Математика (СПО)
			</Heading>
			<Accordion.Root multiple>
				<For each={quizData}>
					{(topic) => (
						<Accordion.Item value={topic.title}>
							<Accordion.ItemTrigger>
								{topic.title}
								<Accordion.ItemIndicator>
									<FiChevronUp />
								</Accordion.ItemIndicator>
							</Accordion.ItemTrigger>
							<Accordion.ItemContent>
								<For each={topic.subtopics}>
									{(subtopic) => (
										<>
											<Link
												href={`/topics/${topic.topicId}/subtopics/${subtopic.subtopicId}`}
											>
												{subtopic.title}
											</Link>
											<br />
										</>
									)}
								</For>
							</Accordion.ItemContent>
						</Accordion.Item>
					)}
				</For>
			</Accordion.Root>
		</main>
	);
}
