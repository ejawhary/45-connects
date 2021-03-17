import React from 'react';
import webcam3 from './webcam3.mp4';

const Webcam3 = () => {
	return (
		<div className="webcam3">
			<video src={webcam3} autoPlay loop muted></video>
		</div>
	);
};

export default Webcam3;
