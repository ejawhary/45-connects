import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import GamesContext from '../../../context/games/gamesContext';
import Navbar from '../../layout/Navbar';
import ScoreBoardTitles from './ScoreBoardTitles';
import ScoreBoardItem from './ScoreBoardItem';
import Spinner from '../../layout/Spinner';
import '../../../scss/components/final-score/finalScore.scss';
import '../../../scss/components/final-score/finalScoreItem.scss';

const Scoreboard = () => {
	const authContext = useContext(AuthContext);
	const { getUser, authLoading } = authContext;
	const gamesContext = useContext(GamesContext);
	const { gamesLoading, getAllScores, allScores } = gamesContext;

	useEffect(() => {
		getUser();

		if (!authLoading) {
			getAllScores();
		}

		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Navbar />
			{!authLoading && !gamesLoading ? (
				<div className="scores-container">
					<h1>SCOREBOARD</h1>
					<div className="final-scores">
						<ScoreBoardTitles />
						{!gamesLoading && allScores !== null ? (
							allScores.map((player) => (
								<ScoreBoardItem
									key={player.id}
									position={player.id}
									name={player.name}
									games={player.games}
									tricks={player.tricks}
									seasonScore={player.seasonScore}
									winnings={player.winnings}
								/>
							))
						) : (
							<Spinner />
						)}
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
export default Scoreboard;
