import { createSignal, createEffect, For, Show } from "solid-js";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { RadioGroup } from "~/components/ui/radio-group";
import { Checkbox } from "~/components/ui/checkbox";
import FormulaRenderer from "~/components/FormulaRenderer";
import { FractionInput } from "~/components/task/FractionInput";
import type { TaskPart } from "~/task/model";

/* ========= Основной компонент TaskParts ========= */

interface TaskPartsProps {
	parts: TaskPart[];
	userAnswers: string[];
	onChange: (index: number, value: string) => void;
}

function isFraction(value: string) {
	return /^-?\d+\/\d+$/.test(value.trim());
}

export function TaskParts(props: TaskPartsProps) {
	const groupedParts = () => {
		const result: (TaskPart & { index: number })[][] = [];
		let currentGroup: (TaskPart & { index: number })[] = [];

		props.parts.forEach((part, index) => {
			const partWithIndex = { ...part, index };

			if (part.is_horizontal && part.type === "input") {
				currentGroup.push(partWithIndex);
			} else {
				if (currentGroup.length > 0) {
					result.push([...currentGroup]);
					currentGroup = [];
				}
				result.push([partWithIndex]);
			}
		});

		if (currentGroup.length > 0) {
			result.push(currentGroup);
		}

		return result;
	};

	const renderInputPart = (part: TaskPart, index: number) => {
		const currentAnswer = props.userAnswers[index] || "";

		return (
			<div
				style={{
					display: "flex",
					"align-items": "center",
					gap: "8px",
				}}
			>
				{part.prefix && (
					<Text>
						<FormulaRenderer display={true} formula={part.prefix} />
					</Text>
				)}
				{
					// Вычисляем, нужно ли показывать компоненты для дроби
					isFraction(String(part.answer)) ? (
						<FractionInput
							value={currentAnswer}
							onChange={(updated) =>
								props.onChange(index, updated)
							}
						/>
					) : (
						<Input
							type="text"
							placeholder={part.placeholder || "Ваш ответ"}
							style={{ width: "8rem" }}
							value={currentAnswer}
							onInput={(e) =>
								props.onChange(index, e.currentTarget.value)
							}
						/>
					)
				}
				{part.postfix && (
					<Text>
						<FormulaRenderer
							display={true}
							formula={part.postfix}
						/>
					</Text>
				)}
			</div>
		);
	};

	return (
		<For each={groupedParts()}>
			{(group) => {
				// Если группа содержит только один элемент, рендерим как раньше
				if (group.length === 1) {
					const part = group[0];
					const i = part.index;
					const currentAnswer = props.userAnswers[i] || "";

					return (
						<div
							style={{
								"margin-top": "1rem",
								"padding-bottom": "1rem",
								"border-bottom": "1px solid #ccc",
							}}
						>
							<Text>
								<FormulaRenderer
									formula={part.question || ""}
									display={true}
								/>
							</Text>

							<Show when={part.type === "input"}>
								{renderInputPart(part, i)}
							</Show>

							{/* Обработка типа "radio" */}
							<Show when={part.type === "radio"}>
								<div
									style={{
										display: "flex",
										"align-items": "center",
										gap: "8px",
									}}
								>
									{part.prefix && (
										<Text>
											<FormulaRenderer
												display={true}
												formula={part.prefix}
											/>
										</Text>
									)}
									<RadioGroup.Root
										name={`part-${i}`}
										value={props.userAnswers[i] || ""}
										onValueChange={(details) =>
											props.onChange(
												i,
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
														<FormulaRenderer
															formula={opt.text}
															display={true}
														/>
													</RadioGroup.ItemText>
													<RadioGroup.ItemHiddenInput />
												</RadioGroup.Item>
											)}
										</For>
									</RadioGroup.Root>
									{part.postfix && (
										<Text>
											<FormulaRenderer
												display={true}
												formula={part.postfix}
											/>
										</Text>
									)}
								</div>
							</Show>

							{/* Обработка типа "checkbox" */}
							<Show when={part.type === "checkbox"}>
								<div
									style={{
										display: "flex",
										"align-items": "center",
										gap: "8px",
									}}
								>
									{part.prefix && (
										<Text>
											<FormulaRenderer
												display={true}
												formula={part.prefix}
											/>
										</Text>
									)}
									<div>
										<For each={part.options}>
											{(opt) => (
												<label
													style={{ display: "block" }}
												>
													<Checkbox
														name={`part-${i}`}
														value={opt.text}
														checked={(
															props.userAnswers[
																i
															] || ""
														)
															.split(";")
															.includes(opt.text)}
														onCheckedChange={(
															details,
														) => {
															const current = (
																props
																	.userAnswers[
																	i
																] || ""
															)
																.split(";")
																.filter(
																	Boolean,
																);

															if (
																details.checked
															) {
																props.onChange(
																	i,
																	[
																		...current,
																		opt.text,
																	].join(";"),
																);
															} else {
																props.onChange(
																	i,
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
														<FormulaRenderer
															formula={opt.text}
															display={true}
														/>
													</Checkbox>
												</label>
											)}
										</For>
									</div>
									{part.postfix && (
										<Text>
											<FormulaRenderer
												display={true}
												formula={part.postfix}
											/>
										</Text>
									)}
								</div>
							</Show>
						</div>
					);
				} else {
					// Рендерим группу горизонтальных частей
					return (
						<div
							style={{
								"margin-top": "1rem",
								"padding-bottom": "1rem",
								"border-bottom": "1px solid #ccc",
							}}
						>
							<div
								style={{
									display: "flex",
									"align-items": "center",
									"flex-wrap": "wrap",
									gap: "16px",
								}}
							>
								<For each={group}>
									{(part) => {
										const i = part.index;

										return (
											<div
												style={{
													display: "flex",
													"flex-direction": "column",
													// "flex-grow": "1",
												}}
											>
												<Text>
													<FormulaRenderer
														formula={
															part.question || ""
														}
														display={true}
													/>
												</Text>
												{renderInputPart(part, i)}
											</div>
										);
									}}
								</For>
							</div>
						</div>
					);
				}
			}}
		</For>
	);
}
