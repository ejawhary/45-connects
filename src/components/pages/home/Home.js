import React from 'react';
import Navbar from '../../layout/Navbar';
import UpcomingGame from './upcomingGame/UpcomingGame';
import RegisterGamesForm from './gameReg/RegisterGamesForm';
import RegisteredGames from './gameReg/RegisteredGames';
import RegisteredGamesItem from './gameReg/RegisteredGamesItem';

const Home = () => {
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
