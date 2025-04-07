import { Button } from "~/components/ui/button";
import { FiArrowLeft, FiArrowRight } from "solid-icons/fi";

interface TaskNavigationProps {
	prevEnabled: boolean;
	nextEnabled: boolean;
	checkEnabled: boolean;
	onPrev: () => void;
	onNext: () => void;
	onCheck: () => void;
	onBack: () => void;
}

export function TaskNavigation(props: TaskNavigationProps) {
	return (
		<>
			<div
				style={{
					"margin-top": "1.5rem",
					display: "flex",
					gap: "1rem",
				}}
			>
				<Button
					onClick={props.onPrev}
					disabled={!props.prevEnabled}
					variant="outline"
				>
					<FiArrowLeft style={{ "margin-right": "0.5rem" }} />
					Предыдущая задача
				</Button>

				<Button onClick={props.onCheck} disabled={!props.checkEnabled}>
					Проверить ответы
				</Button>

				<Button
					onClick={props.onNext}
					disabled={!props.nextEnabled}
					variant="outline"
				>
					Следующая задача
					<FiArrowRight style={{ "margin-left": "0.5rem" }} />
				</Button>
			</div>

			<Button
				style={{ "margin-top": "1rem" }}
				onClick={props.onBack}
				variant="subtle"
			>
				Назад к списку
			</Button>
		</>
	);
}
