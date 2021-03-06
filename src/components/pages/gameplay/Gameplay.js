import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import GamesContext from '../../../context/games/gamesContext';
import Spinner from '../../layout/Spinner';
import GamesScore from '../../assets/gameScore/GameScore';
import Table from '../../assets/table/Table';
import Webcam1 from '../../assets/webcams/Webcam1';
import Webcam2 from '../../assets/webcams/Webcam2';
import Webcam3 from '../../assets/webcams/Webcam3';
import Webcam4 from '../../assets/webcams/Webcam4';
import PlayBTN from '../../assets/PlayBTN';

const Gameplay = () => {
	const authContext = useContext(AuthContext);
	const { getUser, authLoading } = authContext;
	const gamesContext = useContext(GamesContext);
	const { getScores, gamesLoading } = gamesContext;

	useEffect(() => {
		getUser();
		getScores();
		// eslint-disable-next-line
	}, []);

	const table = (
		<div className="container">
			<GamesScore />
			<Webcam1 />
			<Webcam2 />
			<Webcam3 />
			<Webcam4 />
			<Table />
			<PlayBTN />
		</div>
	);

	return !authLoading && !gamesLoading ? table : <Spinner />;
};

export default Gameplay;
