import React from 'react';
import CardFront from './CardFront';

const TrumpCard = ({ value, suit }) => {
	return (
		<div className="trump-container">
			<h3>Trump</h3>
			<div className={'card-container card-container-front trump'}>
				<div
					className={`card ${
						suit === '♣' || suit === '♠' ? 'black-text' : 'red-text'
					}`}
					data-value={value + suit}
				>
					<div className="center-suits">
						<div className="suit suit1">{suit}</div>
						<div className="suit suit2">{suit}</div>
						<div className="suit suit3">{suit}</div>
						<div className="suit suit4">{suit}</div>
						<div className="suit suit5">{suit}</div>
						<div className="suit suit6">{suit}</div>
						<div className="suit suit7">{suit}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrumpCard;
