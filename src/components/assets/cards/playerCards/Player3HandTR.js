import React from 'react';
import OtherPlayerCardsTR from './OtherPlayerCardsTR';

const Player3HandTR = () => {
	return (
		<div className="player-2-cards" style={handStyleTR}>
			<OtherPlayerCardsTR />
		</div>
	);
};

const handStyleTR = {
	position: 'absolute',
	top: '4rem',
	right: '3rem',
	transformOrigin: '100% 100%',
	transform: 'rotate(-90deg)',
};

export default Player3HandTR;
