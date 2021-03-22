import React from 'react';
import Navbar from '../../layout/Navbar';
import RegisterGamesForm from './gameReg/RegisterGamesForm';
import RegisteredGames from './gameReg/RegisteredGames';
import RegisteredGamesItem from './gameReg/RegisteredGamesItem';

const Home = () => {
	return (
		<main>
			<Navbar />
			<section className="flex-row">
				<RegisterGamesForm />
				<RegisteredGames />
			</section>
		</main>
	);
};

export default Home;
