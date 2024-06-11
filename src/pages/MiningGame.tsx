import { useContext, useEffect, useState } from "react";
import styles from "./css/game.module.css";
import { TGContext } from "../App";
import logo from "../assets/bubba.png";
export const MiningGame = () => {
	const { tg } = useContext(TGContext);
	const [user, setUser] = useState<WebAppUser>(null);
	const [mining, setMining] = useState<boolean>(false);
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const [userBalance, setUserBalance] = useState<number>(4925);
	const [activeBoost, setActiveBoost] = useState<number | null>(1);

	useEffect(() => {
		let telegramUser = tg.getUser(); //change to const

		if (!telegramUser) {
			telegramUser = {
				first_name: "Meave",
				username: "username",
				id: 123,
			};
		}
		setUser(telegramUser);
		// Save user to the database
		if (telegramUser) {
			// createUser(telegramUser)
			// 	.then((savedUser) => {
			// 		console.log("User saved:", savedUser);
			// 	})
			// 	.catch((error) => {
			// 		console.error("Error saving user:", error);
			// 	});
		}
	}, []);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (mining && timeLeft > 0) {
			timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		} else if (timeLeft === 0 && mining) {
			return () => clearTimeout(timer);
		}
	}, [mining, timeLeft]);

	const startMining = () => {
		setMining(true);
		setTimeLeft(activeBoost === 2 ? 30 : 5); // 1 minute timer, 30 seconds if Speed Mining is active
	};

	const claimCoins = () => {
		if (mining && timeLeft === 0) {
			setMining(false);

			const coinsToClaim = activeBoost === 1 ? 20 : 10; // Double coins if Double Coins is active
			setUserBalance(userBalance + coinsToClaim);

			// Save claimed coins to the database
			// claimUserCoins(user.id, coinsToClaim)
			// 	.then((updatedUser) => {
			// 		console.log("Coins claimed:", updatedUser);
			// 	})
			// 	.catch((error) => {
			// 		console.error("Error claiming coins:", error);
			// 	});
		}
	};
	return (
		<div className={styles.miningGame}>
			{user ? (
				<div className={styles.gameContainer}>
					<h1 style={{ color: "white" }}>Welcome, {user.first_name}</h1>
					<div className={styles.mainBlock}>
						<p style={{ textAlign: "center" }}>You Balance</p>
						<div className={styles.photoBlock}>
							{/* <img src={user.photo_url} alt='User Avatar' className={styles.mineImage} /> */}
							<img src={logo} alt='User Avatar' className={styles.mineImage} />

							<div className={styles.mineCount}>{userBalance}</div>
						</div>
						{mining && timeLeft !== 0 ? (
							<div className={styles.miningText}>Get After: {timeLeft}s</div>
						) : !mining && timeLeft === 0 ? (
							<button className={styles.mineButton} onClick={startMining} disabled={mining}>
								{" "}
								Start Mine
							</button>
						) : (
							<button className={styles.mineButton} onClick={claimCoins} disabled={mining && timeLeft > 0}>
								{" "}
								Claim Coins
							</button>
						)}
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};
