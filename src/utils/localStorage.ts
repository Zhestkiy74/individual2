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

export function getWrongSolvedTasks(): string[] {
	if (typeof window === "undefined") {
		return [];
	}
	const data = window.localStorage.getItem("wrongSolvedTasks");
	if (!data) {
		return [];
	}
	try {
		return JSON.parse(data);
	} catch {
		return [];
	}
}

export function addWrongSolvedTask(taskId: string): void {
	const wrongSolved = getWrongSolvedTasks();
	if (!wrongSolved.includes(taskId)) {
		wrongSolved.push(taskId);
		localStorage.setItem("wrongSolvedTasks", JSON.stringify(wrongSolved));
	}
}

export function isTaskWrongSolved(taskId: string): boolean {
	const wrongSolved = getWrongSolvedTasks();
	return wrongSolved.includes(taskId);
}

export function removeWrongSolvedTask(taskId: string): void {
	const wrongSolved = getWrongSolvedTasks();
	const index = wrongSolved.indexOf(taskId);
	if (index !== -1) {
		wrongSolved.splice(index, 1);
		localStorage.setItem("wrongSolvedTasks", JSON.stringify(wrongSolved));
	}
}

export function clearWrongSolvedTasks(): void {
	localStorage.removeItem("wrongSolvedTasks");
}
