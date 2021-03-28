import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import Table from '../../assets/table/Table';
import Webcam1 from '../../assets/webcams/Webcam1';
import Webcam2 from '../../assets/webcams/Webcam2';
import Webcam3 from '../../assets/webcams/Webcam3';
import Webcam4 from '../../assets/webcams/Webcam4';

const Gameplay = () => {
	const authContext = useContext(AuthContext);
	const { getUser } = authContext;

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Webcam1 />
			<Webcam2 />
			<Webcam3 />
			<Webcam4 />
			<Table />
		</div>
	);
};

export default Gameplay;
