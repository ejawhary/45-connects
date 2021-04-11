import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
	const [time, setTime] = useState({
		minutes: 2,
		seconds: 0,
	});

	// Set the date we're counting down to
	const countDownDate = new Date();

	useEffect(() => {
		// Update the count down every 1 second
		const x = setInterval(() => {
			// Get today's date and time
			let now = new Date().getTime();

			// Find the distance between now and the count down date
			let distance = countDownDate - now;

			// Time calculations for minutes and seconds
			let minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);
			setTime({
				minutes,
				seconds,
			});
		}, 1000);
	}, []);

	return (
		<Link to="/scoreboard">
			<div className="timer">
				<span>
					{time.minutes.length === 1
						? '0' + String(time.minutes)
						: String(time.minutes)}
					:
					{time.seconds.length === 1
						? '0' + String(time.seconds)
						: String(time.minutes)}
				</span>
			</div>
		</Link>
	);
};
export default Timer;
