import React, { useState } from 'react';
import CardFront from '../CardFront';

const Player1Cards = () => {
	const initialState = [
		{
			id: 0,
			value: '2',
			suit: '♣',
			player1: true,
			raise: false,
		},
		{
			id: 1,
			value: '7',
			suit: '♦',
			player1: true,
			raise: false,
		},
		{
			id: 2,
			value: '9',
			suit: '♠',
			player1: true,
			raise: false,
		},
		{
			id: 3,
			value: 'K',
			suit: '♥',
			player1: true,
			raise: false,
		},
		{
			id: 4,
			value: 'A',
			suit: '♣',
			player1: true,
			raise: false,
		},
	];

	const [hand, setHand] = useState(initialState);

	const clicked = (e) => {
		let clickedValue;
		let clickedSuit;

		if (e.target.classList.contains('suit')) {
			clickedValue =
				e.target.parentElement.parentElement.attributes[1].value[0];
			clickedSuit =
				e.target.parentElement.parentElement.attributes[1].value[1];
		}

		if (e.target.classList.contains('card')) {
			clickedValue = e.target.attributes[1].value[0];
			clickedSuit = e.target.attributes[1].value[1];
		}

		if (e.target.classList.contains('suit')) {
			hand.forEach((card) => {
				if (card.value === clickedValue && card.suit === clickedSuit) {
					let tempHand = [...hand];
					let tempCard = { ...card };
					tempCard.raise = !tempCard.raise;
					tempHand[card.id] = tempCard;
					setHand(tempHand);
				}
			});
		}

		if (e.target.classList.contains('card')) {
			hand.forEach((card) => {
				if (card.value === clickedValue && card.suit === clickedSuit) {
					let tempHand = [...hand];
					let tempCard = { ...card };
					tempCard.raise = !tempCard.raise;
					tempHand[card.id] = tempCard;
					setHand(tempHand);
				}
			});
		}
	};

	return (
		<div className="player1Cards">
			{hand.map((card) => (
				<CardFront
					value={card.value}
					suit={card.suit}
					player1={card.player1}
					raise={card.raise}
					onClick={clicked}
					key={card.id}
				/>
			))}
		</div>
	);
};

export default Player1Cards;
