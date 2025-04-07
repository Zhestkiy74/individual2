import { createEffect, createSignal, For, Show } from "solid-js";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { RadioGroup } from "~/components/ui/radio-group";
import { Checkbox } from "~/components/ui/checkbox";
import FormulaRenderer from "~/components/FormulaRenderer";
import type { TaskPart } from "~/task/model";

interface TaskPartsProps {
	parts: TaskPart[];
	userAnswers: string[];
	onChange: (index: number, value: string) => void;
}

export function TaskParts(props: TaskPartsProps) {
	return (
		<For each={props.parts}>
			{(part, i) => (
				<div
					style={{
						"margin-top": "1rem",
						"padding-bottom": "1rem",
						"border-bottom": "1px solid #ccc",
					}}
				>
					<Text>
						<b>Часть {i() + 1}:</b> {part.question || ""}
					</Text>

					<Show when={["input", "select"].includes(part.type)}>
						<Show when={"/".includes(part.answer[i()])}>
							ДЕЛЕНИЕ
						</Show>
						<Input
							type="text"
							placeholder="Ваш ответ"
							value={props.userAnswers[i()] || ""}
							onInput={(e) =>
								props.onChange(i(), e.currentTarget.value)
							}
						/>
					</Show>

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

					<Show when={part.type === "checkbox"}>
						<For each={part.options}>
							{(opt) => (
								<label style={{ display: "block" }}>
									<Checkbox
										name={`part-${i()}`}
										value={opt.text}
										checked={(props.userAnswers[i()] || "")
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
													[...current, opt.text].join(
														";",
													),
												);
											} else {
												props.onChange(
													i(),
													current
														.filter(
															(v) =>
																v !== opt.text,
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
			)}
		</For>
	);
}
