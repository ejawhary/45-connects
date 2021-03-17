import React, { Fragment } from 'react';

const CardFront = ({ value, suit }) => {
	return (
		<Fragment>
			<div className="card-container">
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
		</Fragment>
	);
};

export default CardFront;
