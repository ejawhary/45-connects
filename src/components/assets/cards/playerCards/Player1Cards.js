import React, { useState } from 'react';
import CardFront from '../CardFront';

const Player1Cards = () => {
	const [hand, setHand] = useState([
		{
			id: 1,
			value: '2',
			suit: '♣',
		},
		{
			id: 2,
			value: '7',
			suit: '♦',
		},
		{
			id: 3,
			value: '9',
			suit: '♠',
		},
		{
			id: 4,
			value: 'K',
			suit: '♥',
		},
		{
			id: 5,
			value: 'A',
			suit: '♣',
		},
	]);

	return (
		<div className="player1Cards">
			{hand.map((card) => (
				<CardFront value={card.value} suit={card.suit} key={card.id} />
			))}
		</div>
	);
};

export default Player1Cards;
