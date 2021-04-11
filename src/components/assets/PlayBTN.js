import React from 'react';

const PlayBTN = () => {
	return (
		<div style={playBTNStyles}>
			<button className="btn btn-danger">X</button>
			<button className="btn btn-primary">Play Card</button>
		</div>
	);
};

export default PlayBTN;

const playBTNStyles = {
	position: 'absolute',
	bottom: '40px',
	middle: 0,
	width: 200,
	display: 'flex',
	justifyContent: 'space-between',
};
