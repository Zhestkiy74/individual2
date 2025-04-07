import { For, Show } from "solid-js";

interface TaskImagesProps {
	images?: string[];
}

export function TaskImages(props: TaskImagesProps) {
	return (
		<Show when={props.images?.length}>
			<div class="task-images">
				<For each={props.images}>
					{(imgSrc) => (
						<div>
							<img
								src={`/tasks/${imgSrc}`}
								alt="Task illustration"
							/>
						</div>
					)}
				</For>
			</div>
		</Show>
	);
}
