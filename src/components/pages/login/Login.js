import React, { useContext } from 'react';
import FacebookBtn from './FacebookBtn';
import GoogleBtn from './GoogleBtn';
import EmailLogin from './EmailLogin';
import GamesContext from '../../../context/games/gamesContext';

const Login = () => {
	const gamesContext = useContext(GamesContext);
	const { deleteAll } = gamesContext;

	return (
		<div className="container flex-col">
			<h1
				style={{ fontSize: '3rem' }}
				className="text-center
			"
			>
				Welcome to
				<br />
				<div className="branding" style={{ marginBottom: '80px' }}>
					<h1
						className="ff red-text"
						style={{ fontSize: '6rem', marginBottom: '-20px' }}
					>
						45
					</h1>
					<h2
						className="connects"
						style={{ fontSize: '3rem', fontStyle: 'italic' }}
					>
						Connects
					</h2>
				</div>
			</h1>
			<GoogleBtn deleteAll={deleteAll} />
			<FacebookBtn deleteAll={deleteAll} />
			<EmailLogin deleteAll={deleteAll} />
		</div>
	);
};

export default Login;
