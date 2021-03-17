import React from 'react';
import webcam2 from './webcam2.mp4';

const Webcam2 = () => {
	return (
		<div className="webcam2">
			<video src={webcam2} autoPlay loop muted></video>
		</div>
	);
};

export default Webcam2;
