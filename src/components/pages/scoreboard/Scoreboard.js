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
		getAllScores();
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
							gamesData.map((game) => (
								<ScoreBoardItem
									key={allScores.id}
									position={allScores.id + 1}
									name={allScores.name}
									games={allScores.games}
									tricks={allScores.ticks}
									seasonScore={allScores.seasonScore}
									winnings={allScores.winnings}
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
