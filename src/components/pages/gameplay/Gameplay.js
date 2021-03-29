import React, { useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';
import GamesContext from '../../../context/games/gamesContext';
import Spinner from '../../layout/Spinner';
import Table from '../../assets/table/Table';
import Webcam1 from '../../assets/webcams/Webcam1';
import Webcam2 from '../../assets/webcams/Webcam2';
import Webcam3 from '../../assets/webcams/Webcam3';
import Webcam4 from '../../assets/webcams/Webcam4';

const Gameplay = () => {
	const authContext = useContext(AuthContext);
	const { getUser, authLoading } = authContext;
	const gamesContext = useContext(GamesContext);
	const { gamesLoading } = gamesContext;

	const table = (
		<div className="container">
			<Webcam1 />
			<Webcam2 />
			<Webcam3 />
			<Webcam4 />
			<Table />
		</div>
	);

	return !gamesLoading && !gamesLoading ? table : <Spinner />;
};

export default Gameplay;
