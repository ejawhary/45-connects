import React, { useContext, useEffect } from 'react';
import GamesContext from '../../../../context/games/gamesContext';
import AuthContext from '../../../../context/auth/authContext';
import RegisteredGameItem from './RegisteredGameItem';

const Register4Games = () => {
	const gamesContext = useContext(GamesContext);
	const { getGames, gamesData, gamesLoading } = gamesContext;
	const authContext = useContext(AuthContext);
	const {
		userData: { userId },
		authLoading,
	} = authContext;

	useEffect(() => {
		if (!authLoading) {
			getGames(userId);
		}
		//eslint-disable-next-line
	}, [authLoading]);

	return (
		<div className="comp">
			<h2>Registered Games</h2>
			<ul className="game-list">
				{!gamesLoading && gamesData !== null ? (
					gamesData.map((game) => (
						<RegisteredGameItem game={game} key={game.id} />
					))
				) : (
					<h4
						style={{
							fontSize: '1.5rem',
							alignSelf: 'flex-start',
						}}
					>
						No Games Registered
					</h4>
				)}
			</ul>
		</div>
	);
};

export default Register4Games;
// style={{ height: '70%', overflowY: 'scroll' }}
