import React, { useContext } from 'react';
import GamesContext from '../../../context/games/gamesContext';
import GameScoreItem from './GameScoreItem';
import Spinner from '../../layout/Spinner';

const GameScore = () => {
	const gamesContext = useContext(GamesContext);
	const { scores, gamesLoading } = gamesContext;

	return (
		<div className="game-score">
			{!gamesLoading && scores !== null ? (
				scores.map((player) => (
					<GameScoreItem
						key={player.id}
						name={player.name}
						tricks={player.tricks}
						games={player.games}
					/>
				))
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default GameScore;
