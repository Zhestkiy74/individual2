import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./index.css";
import { Container } from "styled-system/jsx";
import Header from "~/components/header";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Математика (СПО)</Title>
					<Suspense>
						<Container py={{ base: "12", md: "16" }} maxW="10/12">
							<Header />
							<br />
							<br />
							{props.children}
						</Container>
					</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
