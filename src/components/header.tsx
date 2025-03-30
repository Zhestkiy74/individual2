import { Dialog } from "~/components/ui/dialog";
import { Button } from "~/components/ui/styled/button";
import { Stack } from "styled-system/jsx";
import { IconButton } from "~/components/ui/icon-button";
import { FiX } from "solid-icons/fi";
import { clearSolvedTasks } from "~/utils/localStorage";
import { createSignal } from "solid-js";

export default function Header() {
	const [open, setOpen] = createSignal(false);
	return (
		<header
			style={{
				display: "flex",
				"justify-content": "space-between",
			}}
		>
			<Button href="/" as="a">
				Домой
			</Button>
			<Button variant="outline" onClick={() => setOpen(true)}>
				Очистить прогресс
			</Button>

			<Dialog.Root open={open()} onOpenChange={() => setOpen(false)}>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Stack gap="8" p="6">
							<Stack gap="1">
								<Dialog.Title>Очистить прогресс</Dialog.Title>
								<Dialog.Description>
									Вы уверены, что хотите очистить прогресс?
								</Dialog.Description>
							</Stack>
							<Stack gap="3" direction="row" width="full">
								<Dialog.CloseTrigger
									asChild={(closeTriggerProps) => (
										<Button
											{...closeTriggerProps()}
											variant="outline"
										>
											Нет
										</Button>
									)}
								/>
								<Button
									onClick={() => {
										clearSolvedTasks();
										setOpen(false);
									}}
								>
									Да
								</Button>
							</Stack>
						</Stack>
						<Dialog.CloseTrigger
							asChild={(closeTriggerProps) => (
								<IconButton
									{...closeTriggerProps()}
									aria-label="Close Dialog"
									variant="ghost"
									size="sm"
									position="absolute"
									top="2"
									right="2"
								>
									<FiX />
								</IconButton>
							)}
						/>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Root>
		</header>
	);
}
