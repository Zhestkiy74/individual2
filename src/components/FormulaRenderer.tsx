import { Component, createEffect } from "solid-js";

type ClientFormulaProps = {
	formula: string;
	display?: boolean;
};

const ClientFormula: Component<ClientFormulaProps> = (props) => {
	let containerRef: HTMLDivElement | undefined;

	createEffect(() => {
		if (containerRef) {
			containerRef.innerHTML = props.formula;
			if (typeof window?.MathJax !== "undefined") {
				window.MathJax.typesetClear([containerRef]);
				window.MathJax.typeset([containerRef]);
			}
		}
	});

	return <div ref={(el) => (containerRef = el)} />;
};

export default ClientFormula;
