import React from 'react';
import OtherPlayerCardsTR from './OtherPlayerCardsTR';

const Player4HandBR = () => {
	return (
		<div className="player-2-cards" style={handStyleBL}>
			<OtherPlayerCardsTR />
		</div>
	);
};

const handStyleBL = {
	position: 'absolute',
	bottom: '4rem',
	right: '3rem',
	transformOrigin: '100% 100%',
	transform: 'rotate(-25deg)',
};

export default Player4HandBR;
