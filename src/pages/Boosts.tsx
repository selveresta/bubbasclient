import React, { useState } from "react";
import { Boost } from "../components/Boost";
import styles from "./css/boosts.module.css";

interface BoostData {
	id: number;
	name: string;
	description: string;
	effect: () => void;
	active: boolean;
}

export const Boosts: React.FC = () => {
	const [boosts, setBoosts] = useState<BoostData[]>([
		{
			id: 1,
			name: "Double Coins",
			description: "Earn double the coins per mining session.",
			effect: () => activateBoost(1),
			active: false,
		},
		{
			id: 2,
			name: "Speed Mining",
			description: "Reduce mining timer by half.",
			effect: () => activateBoost(2),
			active: false,
		},
	]);

	const [activeBoost, setActiveBoost] = useState<number | null>(null);

	const activateBoost = (id: number) => {
		setBoosts(boosts.map((boost) => (boost.id === id ? { ...boost, active: true } : { ...boost, active: false })));
		setActiveBoost(id);
	};

	return (
		<div className={styles.boostPage}>
			<h1>Boosts</h1>
			{boosts.map((boost) => (
				<Boost key={boost.id} name={boost.name} description={boost.description} effect={boost.effect} active={boost.active} />
			))}
		</div>
	);
};
