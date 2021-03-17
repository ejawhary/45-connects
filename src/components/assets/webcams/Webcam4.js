import React from 'react';
import webcam4 from './webcam4.mp4';

const Webcam4 = () => {
	return (
		<div className="webcam4">
			<video src={webcam4} autoPlay loop muted></video>
		</div>
	);
};

export default Webcam4;
