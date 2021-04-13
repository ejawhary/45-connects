import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
	return (
		<Link to="/scoreboard">
			<div className="timer">
				<span>14:45</span>
			</div>
		</Link>
	);
};
export default Timer;
