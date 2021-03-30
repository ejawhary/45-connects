import React from 'react';
import '../../../../scss/components/cards/otherPlayerCards.scss';

const Player2Cards = () => {
	return (
		<div classname="player-cards-container" style={cardsContainerStyles}>
			<div className="card-container card-container-back" id="card-1">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-2">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-3">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-4">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-5">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const cardsContainerStyles = {
	position: 'relative',
	backgroundColor: 'red',
	width: '300px',
	height: '300px',
};

export default Player2Cards;
