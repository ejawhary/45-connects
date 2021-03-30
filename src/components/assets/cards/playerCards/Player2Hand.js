import React from 'react';
import OtherPlayerCards from './OtherPlayerCards';

const Player2Hand = () => {
	return (
		<div className="player-2-cards" style={handStyle}>
			<OtherPlayerCards />
		</div>
	);
};

const handStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	transformOrigin: '0% 100%',
	transform: 'rotate(135deg)',
};

export default Player2Hand;
