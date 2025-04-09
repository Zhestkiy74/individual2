export interface Option {
	id: string;
	text: string;
}

export interface TaskPart {
	partId?: string;
	question?: string;
	type: "radio" | "checkbox" | "input";
	answer: string | string[];
	is_horizontal?: boolean;
	placeholder?: string;
	prefix?: string;
	postfix?: string;
	options?: Option[];
}

export interface QuizTask {
	id: string;
	title: string;
	question: string;
	images?: string[];
	parts: TaskPart[];
}

export interface QuizSubtopic {
	subtopicId: string;
	title: string;
	description?: string;
	tasks: QuizTask[];
}

export interface QuizTopic {
	topicId: string;
	title: string;
	description?: string;
	subtopics: QuizSubtopic[];
}
