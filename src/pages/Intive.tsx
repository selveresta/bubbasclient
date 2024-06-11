import React from "react";
import styles from "./css/invite.module.css";

export const Intive = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inviteBox}>
				<h1>📢 Invite</h1>
				<div className={styles.points}>
					<span className={styles.pointsValue}>610</span>
				</div>
				<button className={styles.inviteButton}>Invite friend</button>
				<br></br>
				<p className={styles.description}>Get 10% from your friends + 5% from their referrals + 2.5% from their referrals</p>
				<div className={styles.referralList}>
					<div className={styles.referralItem}>
						<span className={styles.referralName}>shyrik2005</span>
						<span className={styles.referralPoints}>350</span>
					</div>
					<div className={styles.referralItem}>
						<span className={styles.referralName}>dalipes</span>
						<span className={styles.referralPoints}>220</span>
					</div>
				</div>
			</div>
		</div>
	);
};
