import React from 'react';

const ScoreBoardItem = ({
	position,
	name,
	games,
	tricks,
	seasonScore,
	winnings,
}) => {
	return (
		<div className="score-item">
			<div className="score-info position">
				<h2>#{position}</h2>
			</div>
			<div className="score-info name">
				<h2>{name}</h2>
			</div>
			<div className="score-info games">
				<h2>{games}</h2>
			</div>
			<div className="score-info tricks">
				<h2>{tricks}</h2>
			</div>
			<div className="score-info season-score">
				<h2>{seasonScore}</h2>
			</div>
			<div className="score-info winnings">
				<h2>&euro;{winnings}</h2>
			</div>
		</div>
	);
};

export default ScoreBoardItem;
