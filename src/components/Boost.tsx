import React from "react";
import styles from "./css/boost.module.css";

interface BoostProps {
	name: string;
	description: string;
	effect: () => void;
	active: boolean;
}

export const Boost: React.FC<BoostProps> = ({ name, description, effect, active }) => {
	return (
		<div className={`${styles.boost} ${active ? styles.active : ""}`}>
			<h3>{name}</h3>
			<p style={{ padding: "10px" }}>{description}</p>
			<button onClick={effect} disabled={active}>
				{active ? "Active" : "Activate"}
			</button>
		</div>
	);
};
