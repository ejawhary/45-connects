import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import GamesContext from '../../../../context/games/gamesContext';

const RegisteredGameItem = ({ game }) => {
	const { id, date, contribution, rounds, club } = game;
	const gamesContext = useContext(GamesContext);
	const { deleteGame } = gamesContext;

	const onClick = () => {
		deleteGame(id);
	};

	const playNow = (
		<Link className="btn btn-primary" to="/gameplay">
			Play Now!
		</Link>
	);

	const gameDate = (
		<div className="inner-box">
			<div className="key">Date</div>
			<div className="value">
				<span>{date}</span>
			</div>
		</div>
	);

	return (
		<li className="game-item">
			{date === '21/04/2021' ? playNow : gameDate}
			<div className="inner-box">
				<div className="key">Contribution</div>
				<div className="value">
					<span>{parse(contribution)}</span>
				</div>
			</div>
			<div className="inner-box">
				<div className="key">Rounds</div>
				<div className="value">
					<span>{rounds}</span>
				</div>
			</div>
			<div className="inner-box">
				<div className="key">Club</div>
				<div className="value">
					<span>{club}</span>
				</div>
			</div>
			<button className="btn btn-danger" onClick={onClick}>
				X
			</button>
			{/* {id === 1 ? (
				<Link className="btn btn-primary" to="/gameplay">
					Play
				</Link>
			) : (
				<button className="btn btn-danger" onClick={onClick}>
					X
				</button>
			)} */}
		</li>
	);
};

export default RegisteredGameItem;

{
	/* <span>{date}</span>
<span>{parse(contribution)}</span>
<span>{rounds}</span>
<span>{club}</span>
{id === 1 && (
	<Link className="btn btn-primary" to="/gameplay">
		Play Now!
	</Link>
)} */
}
