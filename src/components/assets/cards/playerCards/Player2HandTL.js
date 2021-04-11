import React from 'react';
import OtherPlayerCardsTL from './OtherPlayerCardsTL';

const Player2HandTL = () => {
	return (
		<div className="player-2-cards" style={handStyleTL}>
			<OtherPlayerCardsTL />
		</div>
	);
};

const handStyleTL = {
	position: 'absolute',
	top: '4rem',
	left: '-2rem',
	transformOrigin: '100% 100%',
	transform: 'rotate(160deg)',
};

export default Player2HandTL;
