import React, { useState } from "react";
import { Task } from "../components/Task";
import styles from "./css/tasks.module.css";

interface TaskData {
	id: number;
	name: string;
	type: string;
	reward: number;
	conditional: string;
	completed: boolean;
}

const initialTasks: TaskData[] = [
	{ id: 1, name: "Task 1", type: "invite", reward: 10, conditional: "Condition 1", completed: false },
	{ id: 2, name: "Task 2", type: "task", reward: 20, conditional: "Condition 2", completed: false },
	{ id: 3, name: "Task 3", type: "task", reward: 30, conditional: "Condition 3", completed: false },
	{ id: 4, name: "Task 3", type: "task", reward: 30, conditional: "Condition 3", completed: false },
	{ id: 5, name: "Task 3", type: "task", reward: 30, conditional: "Condition 3", completed: false },
	{ id: 6, name: "Task 3", type: "task", reward: 30, conditional: "Condition 3", completed: false },
	{ id: 7, name: "Task 3", type: "task", reward: 30, conditional: "Condition 3", completed: false },
];

export const Tasks: React.FC = () => {
	const [tasks, setTasks] = useState<TaskData[]>(initialTasks);

	const handleCheck = (id: number) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
	};

	return (
		<div className={styles.tasksPage}>
			<h1>Tasks</h1>
			<div className={styles.tasks}>
				{tasks.map((task) => (
					<Task
						key={task.id}
						name={task.name}
						type={task.type}
						reward={task.reward}
						conditional={task.conditional}
						onCheck={() => handleCheck(task.id)}
						completed={task.completed}
					/>
				))}
			</div>
		</div>
	);
};
