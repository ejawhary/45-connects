import React from 'react';
import '../../../../scss/components/cards/otherPlayerCards.scss';

const OtherPlayerCardsTL = () => {
	return (
		<div classname="player-cards-container" style={cardsContainerStyles}>
			<div className="card-container card-container-back" id="card-1-TL">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-2-TL">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-3-TL">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-4-TL">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-5-TL">
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
	transformOrigin: '100% 100%',
	position: 'relative',
	width: '80px',
	height: '10px',
};

export default OtherPlayerCardsTL;
