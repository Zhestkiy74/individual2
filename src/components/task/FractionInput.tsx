import { createSignal, createEffect } from "solid-js";
import { Input } from "~/components/ui/input";

/**
 * "Парсит" строку-дробь и возвращает её части: знак, числитель и знаменатель
 */
function parseFraction(value: string) {
	const match = /^(-?)(\d+)\/(\d+)$/.exec(value.trim());
	if (!match) return null;
	return {
		sign: match[1], // "-" или ""
		numerator: match[2],
		denominator: match[3],
	};
}

/**
 * Собирает строку дроби в формате "-числитель/знаменатель" из отдельных частей.
 */
function buildFraction(sign: string, numerator: string, denominator: string) {
	const validSign = sign === "-" ? "-" : "";
	return `${validSign}${numerator || "0"}/${denominator || "1"}`;
}

/* ========= Компонент для ввода дроби ========= */

interface FractionInputProps {
	value: string;
	onBlur: (value: string) => void;
	disabled: boolean;
}

export function FractionInput(props: FractionInputProps) {
	const initial = parseFraction(props.value) || {
		sign: "",
		numerator: "",
		denominator: "",
	};

	const [fractionSign, setFractionSign] = createSignal(initial.sign);
	const [fractionNumerator, setFractionNumerator] = createSignal(
		initial.numerator,
	);
	const [fractionDenom, setFractionDenom] = createSignal(initial.denominator);

	// Синхронизация локального состояния с внешним значением
	createEffect(() => {
		const parsed = parseFraction(props.value);
		if (parsed) {
			if (parsed.sign !== fractionSign()) setFractionSign(parsed.sign);
			if (parsed.numerator !== fractionNumerator())
				setFractionNumerator(parsed.numerator);
			if (parsed.denominator !== fractionDenom())
				setFractionDenom(parsed.denominator);
		}
	});

	// Обновление значения при изменении одной из частей
	const handleChange = (
		newSign: string,
		newNumerator: string,
		newDenom: string,
	) => {
		const updated = buildFraction(newSign, newNumerator, newDenom);
		props.onBlur(updated);
	};

	return (
		<div
			style={{ display: "flex", "align-items": "center", gap: "0.5rem" }}
		>
			{/* Поле ввода знака */}
			<Input
				disabled={props.disabled}
				type="text"
				style={{ width: "3rem" }}
				placeholder="+/-"
				value={fractionSign()}
				onBlur={(e) => {
					const newSign = e.currentTarget.value;
					setFractionSign(newSign);
					handleChange(newSign, fractionNumerator(), fractionDenom());
				}}
			/>
			<div style={{ "font-weight": "bold" }}>
				{/* Поле ввода числителя */}
				<Input
					disabled={props.disabled}
					type="text"
					// style={{ width: "8rem" }}
					placeholder="числитель"
					value={fractionNumerator()}
					onBlur={(e) => {
						const newNumerator = e.currentTarget.value;
						setFractionNumerator(newNumerator);
						handleChange(
							fractionSign(),
							newNumerator,
							fractionDenom(),
						);
					}}
				/>
				<span
					style={{
						margin: "0.2rem",
						border: "1px solid black",
						width: "100%",
						display: "flex",
					}}
				></span>
				<Input
					disabled={props.disabled}
					type="text"
					// style={{ width: "5rem" }}
					placeholder="знаменатель"
					value={fractionDenom()}
					onBlur={(e) => {
						const newDenom = e.currentTarget.value;
						setFractionDenom(newDenom);
						handleChange(
							fractionSign(),
							fractionNumerator(),
							newDenom,
						);
					}}
				/>
			</div>
		</div>
	);
}
