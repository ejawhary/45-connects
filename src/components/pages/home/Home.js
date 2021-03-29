import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import Navbar from '../../layout/Navbar';
import UpcomingGame from './upcomingGame/UpcomingGame';
import RegisterGamesForm from './gameReg/RegisterGamesForm';
import RegisteredGames from './gameReg/RegisteredGames';
import Spinner from '../../layout/Spinner';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { getUser } = authContext;

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Navbar />
			<main className="home-container">
				<UpcomingGame />
				<section className="games-container">
					<RegisterGamesForm />
					<RegisteredGames />
				</section>
			</main>
		</>
	);
};

export default Home;
