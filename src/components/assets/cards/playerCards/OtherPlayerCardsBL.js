import React from 'react';
import '../../../../scss/components/cards/otherPlayerCards.scss';

const OtherPlayerCardsBL = () => {
	return (
		<div classname="player-cards-container" style={cardsContainerStyles}>
			<div className="card-container card-container-back" id="card-1-BR">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-2-BR">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-3-BR">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-4-BR">
				<div className="card black-text">
					<div className="center">
						<div className="ff red-text">45</div>
						<div className="connects black-text">Connects</div>
					</div>
				</div>
			</div>
			<div className="card-container card-container-back" id="card-5-BR">
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

export default OtherPlayerCardsBL;
