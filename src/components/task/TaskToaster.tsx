import { Toast } from "~/components/ui/toast";
import { IconButton } from "~/components/ui/icon-button";
import { FiX } from "solid-icons/fi";
import { Component } from "solid-js";

interface TaskToasterProps {
	toaster: ReturnType<typeof Toast.createToaster>;
}

export const TaskToaster: Component<TaskToasterProps> = (props) => {
	return (
		<Toast.Toaster toaster={props.toaster}>
			{(toast) => (
				<Toast.Root>
					<Toast.Title>{toast().title}</Toast.Title>
					<Toast.Description>{toast().description}</Toast.Description>
					<Toast.CloseTrigger
						asChild={(closeProps) => (
							<IconButton
								{...closeProps()}
								size="sm"
								variant="link"
							>
								<FiX />
							</IconButton>
						)}
					/>
				</Toast.Root>
			)}
		</Toast.Toaster>
	);
};
