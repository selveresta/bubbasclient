import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { MiningGame } from "./pages/MiningGame";
import { Tasks } from "./pages/Tasks";
import { Boosts } from "./pages/Boosts";
import { Layout } from "./pages/Layout";
import { createContext, useState } from "react";
import { Telegram } from "./services/Telegram";
import { Intive } from "./pages/Intive";

interface ITGContext {
	tg: Telegram;
}

export const TGContext = createContext<ITGContext>(null);

export const App = () => {
	const [tg, setDB] = useState(new Telegram());

	return (
		<TGContext.Provider value={{ tg }}>
			<Router>
				<Layout>
					<Routes>
						<Route path='/' element={<Navigate to='/game' />} />
						<Route path='/tasks' element={<Tasks />} />
						<Route path='/game' element={<MiningGame />} />
						<Route path='/boosts' element={<Boosts />} />
						<Route path='/Invite' element={<Intive />} />
					</Routes>
				</Layout>
			</Router>
		</TGContext.Provider>
	);
};
