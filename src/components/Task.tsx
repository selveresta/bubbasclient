import React from "react";
import styles from "./css/task.module.css";
import inviteLogo from "../assets/invite.png";
import taskLogo from "../assets/task.png";

interface TaskProps {
	name: string;
	reward: number;
	type: string;
	conditional: string;
	onCheck: () => void;
	completed: boolean;
}

export const Task: React.FC<TaskProps> = ({ name, type, reward, conditional, onCheck, completed }) => {
	const icons = [inviteLogo, taskLogo];

	return (
		<div className={`${styles.task} ${completed ? styles.completed : ""}`}>
			{type === "invite" ? (
				<img className={styles.taskLogo} src={inviteLogo} alt='invite'></img>
			) : (
				<img className={styles.taskLogo} src={taskLogo} alt='task'></img>
			)}
			<div>
				<p>Reward: {reward} coins</p>
				<p>Condition: {conditional}</p>
			</div>

			<button onClick={onCheck} disabled={completed}>
				Check
			</button>
		</div>
	);
};
