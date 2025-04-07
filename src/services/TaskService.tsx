import type { QuizTask } from "~/task/model";

export function checkAnswers(task: QuizTask, userAnswers: string[]): boolean {
	const { parts } = task;

	return parts.every((part, index) => {
		const userAnswer = userAnswers[index]?.trim().toLowerCase() || "";
		const correct = part.answer;

		if (Array.isArray(correct)) {
			const userArray = userAnswer.split(";").map((s) => s.trim());
			return (
				userArray.length === correct.length &&
				correct.every((ans) =>
					userArray.includes(ans.trim().toLowerCase()),
				)
			);
		} else {
			return userAnswer === correct.trim().toLowerCase();
		}
	});
}
