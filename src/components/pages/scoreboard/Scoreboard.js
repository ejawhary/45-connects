import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import GamesContext from '../../../context/games/gamesContext';
import Navbar from '../../layout/Navbar';
import Spinner from '../../layout/Spinner';
import '../../../scss/components/final-score/finalScore.scss';
import '../../../scss/components/final-score/finalScoreItem.scss';

const Scoreboard = () => {
	const authContext = useContext(AuthContext);
	const { getUser, authLoading } = authContext;
	const gamesContext = useContext(GamesContext);
	const { gamesLoading } = gamesContext;

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Navbar />
			{!authLoading && !gamesLoading ? (
				<div className="final-scores">
					<div className="player">
						<div className="name">
							<h2></h2>
						</div>
						<div className="score-container">
							<div className="tricks score">
								<h3>123</h3>
								<h4>123</h4>
							</div>
							<div className="games score">
								<h3></h3>
								<h4></h4>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Scoreboard;

// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../../context/auth/authContext';
// import GamesContext from '../../../context/games/gamesContext';
// import Navbar from '../../layout/Navbar';
// import Spinner from '../../layout/Spinner';
// import '../../../scss/components/final-score/finalScore.scss';
// import '../../../scss/components/final-score/finalScoreItem.scss';

// const Scoreboard = () => {
// 	const authContext = useContext(AuthContext);
// 	const { getUser, authLoading } = authContext;
// 	const gamesContext = useContext(GamesContext);
// 	const { gamesLoading } = gamesContext;
// 	useEffect(() => {
// 		console.log('Before');
// 		console.log(authLoading);
// 		getUser();
// 		console.log('After');
// 		console.log(authLoading);
// 		// eslint-disable-next-line
// 	}, []);

// 	return (
// 		<>
// 			<Navbar />
// 			{!authLoading && !gamesLoading ? (
// 				<div className="final-scores">
// 					<div className="player">
// 						<div className="name">
// 							<h2></h2>
// 						</div>
// 						<div className="score-container">
// 							<div className="tricks score">
// 								<h3>123</h3>
// 								<h4>123</h4>
// 							</div>
// 							<div className="games score">
// 								<h3></h3>
// 								<h4></h4>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<Spinner />
// 			)}
// 		</>
// 	);
// };

// export default Scoreboard;
