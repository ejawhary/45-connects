import React from 'react';
import PropTypes from 'prop-types';

const GameScoreItem = ({ name, tricks, games }) => {
	return (
		<div className="player">
			<div className="name">
				<h2>{name}</h2>
			</div>
			<div className="score-container">
				<div className="tricks score">
					<h3>T</h3>
					<h4>{tricks}</h4>
				</div>
				<div className="games score">
					<h3>G</h3>
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
