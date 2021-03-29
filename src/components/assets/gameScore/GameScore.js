import React, { useContext, useEffect } from 'react';
import GamesContext from '../../../context/games/gamesContext';
import GameScoreItem from './GameScoreItem';
import Spinner from '../../layout/Spinner';

const GameScore = () => {
	const gamesContext = useContext(GamesContext);
	const { getScores, scores, gamesLoading } = gamesContext;

	useEffect(() => {
		getScores();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="game-score">
			{!gamesLoading && scores ? (
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
