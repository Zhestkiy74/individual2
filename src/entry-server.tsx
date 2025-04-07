// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body>
					<div id="app">{children}</div>
					{scripts}
					<script
						type="text/javascript"
						id="MathJax-script"
						async
						src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
					></script>
				</body>
			</html>
		)}
	/>
));
