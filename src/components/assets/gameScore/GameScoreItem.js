import React from 'react';
import PropTypes from 'prop-types';

const GameScoreItem = ({ name, tricks, games }) => {
	return (
		<div className="player">
			<div className="name">
				<h3>{name}</h3>
			</div>
			<div className="score-container">
				<div className="tricks">
					<h4>{tricks}</h4>
				</div>
				<div className="games">
					<h4>{games}</h4>
				</div>
			</div>
		</div>
	);
};

GameScoreItem.propTypes = {
	name: PropTypes.string.isRequired,
	tricks: PropTypes.number.isRequired,
	games: PropTypes.number.isRequired,
};

export default GameScoreItem;
