import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import { Link } from "~/components/ui/link";
import { Heading } from "~/components/ui/heading";

export default function NotFound() {
	return (
		<main>
			<Title>Не найдено</Title>
			<HttpStatusCode code={404} />
			<Heading size="xl" as="h1">
				Страница не найдена
			</Heading>
			<Link href="/">Домой</Link>
		</main>
	);
}
