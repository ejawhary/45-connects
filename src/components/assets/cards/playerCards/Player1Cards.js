import React, { useState } from 'react';
import CardFront from '../CardFront';

const Player1Cards = () => {
	const [hand, setHand] = useState([
		{
			id: 1,
			value: '2',
			suit: '♣',
			player1: true,
		},
		{
			id: 2,
			value: '7',
			suit: '♦',
			player1: true,
		},
		{
			id: 3,
			value: '9',
			suit: '♠',
			player1: true,
		},
		{
			id: 4,
			value: 'K',
			suit: '♥',
			player1: true,
		},
		{
			id: 5,
			value: 'A',
			suit: '♣',
			player1: true,
		},
	]);

	return (
		<div className="player1Cards">
			{hand.map((card) => (
				<CardFront
					value={card.value}
					suit={card.suit}
					player1={card.player1}
					key={card.id}
				/>
			))}
		</div>
	);
};

export default Player1Cards;
