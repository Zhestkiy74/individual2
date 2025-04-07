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
	return (
		<For each={props.parts}>
			{(part, i) => {
				// Текущее значение ответа пользователя
				const currentAnswer = props.userAnswers[i()] || "";

				return (
					<div
						style={{
							"margin-top": "1rem",
							"padding-bottom": "1rem",
							"border-bottom": "1px solid #ccc",
						}}
					>
						<Text>
							<b>Часть {i() + 1}:</b>
							<FormulaRenderer
								formula={part.question || ""}
								display={true}
							/>
						</Text>

						{/* Обработка типа "input" */}
						<Show when={part.type === "input"}>
							{() => {
								// Если ответ является дробью – показываем поля для дроби
								const shouldShowFractionInputs = isFraction(
									String(part.answer),
								);
								return (
									<Show
										when={shouldShowFractionInputs}
										fallback={
											<Input
												type="text"
												placeholder="Ваш ответ"
												value={currentAnswer}
												onInput={(e) =>
													props.onChange(
														i(),
														e.currentTarget.value,
													)
												}
											/>
										}
									>
										{() => (
											<FractionInput
												value={currentAnswer}
												onChange={(updated) =>
													props.onChange(i(), updated)
												}
											/>
										)}
									</Show>
								);
							}}
						</Show>

						{/* Обработка типа "radio" */}
						<Show when={part.type === "radio"}>
							<RadioGroup.Root
								name={`part-${i()}`}
								value={currentAnswer}
								onValueChange={(details) =>
									props.onChange(i(), details.value || "")
								}
							>
								<For each={part.options}>
									{(opt) => (
										<RadioGroup.Item value={opt.text}>
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
						</Show>

						{/* Обработка типа "checkbox" */}
						<Show when={part.type === "checkbox"}>
							<For each={part.options}>
								{(opt) => {
									const checkedValues = currentAnswer
										.split(";")
										.filter(Boolean);
									return (
										<label style={{ display: "block" }}>
											<Checkbox
												name={`part-${i()}`}
												value={opt.text}
												checked={checkedValues.includes(
													opt.text,
												)}
												onCheckedChange={(details) => {
													const newChecked =
														details.checked
															? [
																	...checkedValues,
																	opt.text,
																]
															: checkedValues.filter(
																	(v) =>
																		v !==
																		opt.text,
																);
													props.onChange(
														i(),
														newChecked.join(";"),
													);
												}}
											>
												<FormulaRenderer
													formula={opt.text}
													display={true}
												/>
											</Checkbox>
										</label>
									);
								}}
							</For>
						</Show>
					</div>
				);
			}}
		</For>
	);
}
