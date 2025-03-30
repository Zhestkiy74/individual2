export function getSolvedTasks(): string[] {
	if (typeof window === "undefined") {
		return [];
	}
	const data = window.localStorage.getItem("solvedTasks");
	if (!data) {
		return [];
	}
	try {
		return JSON.parse(data);
	} catch {
		return [];
	}
}

export function addSolvedTask(taskId: string): void {
	const solved = getSolvedTasks();
	if (!solved.includes(taskId)) {
		solved.push(taskId);
		localStorage.setItem("solvedTasks", JSON.stringify(solved));
	}
}

export function isTaskSolved(taskId: string): boolean {
	const solved = getSolvedTasks();
	return solved.includes(taskId);
}

export function removeSolvedTask(taskId: string): void {
	const solved = getSolvedTasks();
	const index = solved.indexOf(taskId);
	if (index !== -1) {
		solved.splice(index, 1);
		localStorage.setItem("solvedTasks", JSON.stringify(solved));
	}
}

export function clearSolvedTasks(): void {
	localStorage.removeItem("solvedTasks");
}
