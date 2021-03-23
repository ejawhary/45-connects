import React from 'react';
import { Link } from 'react-router-dom';

const RegisteredGameItem = ({ game }) => {
	const { id, date, contribution, rounds, club } = game;
	return (
		<li>
			<span>{date}</span>
			<span>{contribution}</span>
			<span>{rounds}</span>
			<span>{club}</span>
			{id === 1 && (
				<Link className="btn btn-primary" to="/gameplay">
					Play Now!
				</Link>
			)}
		</li>
	);
};

export default RegisteredGameItem;
