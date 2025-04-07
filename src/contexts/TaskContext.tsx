import {
	createContext,
	createMemo,
	useContext,
	ParentComponent,
} from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import { quizData } from "~/task/data";
import { QuizTopic, QuizSubtopic, QuizTask } from "~/task/model";

interface TaskContextType {
	topic: () => QuizTopic | null;
	subtopic: () => QuizSubtopic | null;
	task: () => QuizTask | null;
	taskIndex: () => number;
	taskNumber: () => number;
	totalTasks: () => number;
	prevTaskId: () => string | null;
	nextTaskId: () => string | null;
	goToPrevTask: () => void;
	goToNextTask: () => void;
	goToSubtopic: () => void;
}

const TaskContext = createContext<TaskContextType>({
	topic: () => null,
	subtopic: () => null,
	task: () => null,
	taskIndex: () => -1,
	taskNumber: () => 0,
	totalTasks: () => 0,
	prevTaskId: () => null,
	nextTaskId: () => null,
	goToPrevTask: () => {},
	goToNextTask: () => {},
	goToSubtopic: () => {},
});

export const TaskProvider: ParentComponent = (props) => {
	const navigate = useNavigate();
	const params = useParams();

	const taskContext = createMemo(() => {
		const { topicId, subtopics: subtopicId, taskId } = params;

		const topic = quizData.find((t) => t.topicId === topicId);
		if (!topic)
			return { topic: null, subtopic: null, task: null, taskIndex: -1 };

		const subtopic = topic.subtopics.find(
			(st) => st.subtopicId === subtopicId,
		);
		if (!subtopic)
			return { topic, subtopic: null, task: null, taskIndex: -1 };

		const taskIndex = subtopic.tasks.findIndex((t) => t.id === taskId);
		if (taskIndex === -1)
			return { topic, subtopic, task: null, taskIndex: -1 };

		const task = subtopic.tasks[taskIndex];
		return { topic, subtopic, task, taskIndex };
	});

	const topic = createMemo(() => taskContext().topic);
	const subtopic = createMemo(() => taskContext().subtopic);
	const task = createMemo(() => taskContext().task);
	const taskIndex = createMemo(() => taskContext().taskIndex);

	const taskNumber = createMemo(() => {
		if (task()) return taskIndex() + 1;
		return 0;
	});

	const totalTasks = createMemo(() => subtopic()?.tasks?.length || 0);

	const prevTaskId = createMemo(() => {
		if (!subtopic() || taskIndex() <= 0) return null;
		return subtopic()!.tasks[taskIndex() - 1].id;
	});

	const nextTaskId = createMemo(() => {
		if (
			!subtopic() ||
			taskIndex() === -1 ||
			taskIndex() >= totalTasks() - 1
		)
			return null;
		return subtopic()!.tasks[taskIndex() + 1].id;
	});

	const goToPrevTask = () => {
		const prevId = prevTaskId();
		if (prevId) {
			navigate(
				`/topics/${params.topicId}/subtopics/${params.subtopics}/tasks/${prevId}`,
			);
		}
	};

	const goToNextTask = () => {
		const nextId = nextTaskId();
		if (nextId) {
			navigate(
				`/topics/${params.topicId}/subtopics/${params.subtopics}/tasks/${nextId}`,
			);
		}
	};

	const goToSubtopic = () => {
		navigate(`/topics/${params.topicId}/subtopics/${params.subtopics}`);
	};

	return (
		<TaskContext.Provider
			value={{
				topic,
				subtopic,
				task,
				taskIndex,
				taskNumber,
				totalTasks,
				prevTaskId,
				nextTaskId,
				goToPrevTask,
				goToNextTask,
				goToSubtopic,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
