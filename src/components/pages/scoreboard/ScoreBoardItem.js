import React from 'react';

const ScoreBoardItem = () => {
	return (
		<div className="score-item">
			<div className="score-info position">
				<h2>#1</h2>
			</div>
			<div className="score-info name">
				<h2>John</h2>
			</div>
			<div className="score-info games">
				<h2>3</h2>
			</div>
			<div className="score-info tricks">
				<h2>15</h2>
			</div>
			<div className="score-info season-score">
				<h2>5563</h2>
			</div>
			<div className="score-info winnings">
				<h2>&euro;15</h2>
			</div>
		</div>
	);
};

export default ScoreBoardItem;
