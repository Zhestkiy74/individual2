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

						<Show when={part.type === "input"}>
							{
								// Вычисляем, нужно ли показывать компоненты для дроби
								isFraction(String(part.answer)) ? (
									<FractionInput
										value={currentAnswer}
										onChange={(updated) =>
											props.onChange(i(), updated)
										}
									/>
								) : (
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
								)
							}
						</Show>
						{/* Обработка типа "radio" */}
						<Show when={part.type === "radio"}>
							<RadioGroup.Root
								name={`part-${i()}`}
								value={props.userAnswers[i()] || ""}
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
								{(opt) => (
									<label style={{ display: "block" }}>
										<Checkbox
											name={`part-${i()}`}
											value={opt.text}
											checked={(
												props.userAnswers[i()] || ""
											)

												.split(";")

												.includes(opt.text)}
											onCheckedChange={(details) => {
												const current = (
													props.userAnswers[i()] || ""
												)

													.split(";")

													.filter(Boolean);

												if (details.checked) {
													props.onChange(
														i(),

														[
															...current,
															opt.text,
														].join(";"),
													);
												} else {
													props.onChange(
														i(),

														current

															.filter(
																(v) =>
																	v !==
																	opt.text,
															)

															.join(";"),
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
						</Show>
					</div>
				);
			}}
		</For>
	);
}
