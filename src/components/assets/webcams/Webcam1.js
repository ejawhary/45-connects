import React from 'react';
import webcam1 from './webcam1.mp4';

const Webcam1 = () => {
	return (
		<div className="webcam1">
			<video src={webcam1} autoPlay loop muted></video>
		</div>
	);
};

export default Webcam1;
