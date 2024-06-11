import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Layout.module.css"; // Import css modules stylesheet as styles

export const Layout = ({ children }) => {
	const links = [
		{ url: "/tasks", text: "Tasks" },
		{ url: "/game", text: "Game" },
		{ url: "/boosts", text: "Boosts" },
		{ url: "/invite", text: "Invite" },
	];

	return (
		<div className={styles.layout}>
			<main>{children}</main>
			<header className={styles.myHeader}>
				<div className={styles.nav}>
					{links.map((v) => (
						<Link className={styles.customLink} key={v.url} to={v.url}>
							<li>{v.text}</li>
						</Link>
					))}
				</div>
			</header>
		</div>
	);
};
