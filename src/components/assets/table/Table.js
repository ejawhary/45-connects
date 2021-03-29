import React from 'react';
import GamesScore from '../../assets/gameScore/GameScore';
import Player1Cards from '../cards/playerCards/Player1Cards';
import Player2Cards from '../cards/playerCards/Player2Cards';
import Player3Cards from '../cards/playerCards/Player3Cards';
import Player4Cards from '../cards/playerCards/Player4Cards';
import Deck from '../cards/Deck';
import TrumpCard from '../cards/TrumpCard';
const Table = () => {
	return (
		<>
			<section className="table-container">
				<div className="table">
					<GamesScore />
					<div className="branding">
						<h1 className="ff red-text">45</h1>
						<h2 className="connects">Connects</h2>
					</div>
					<div className="timer">
						<span>14:45</span>
					</div>
					<Deck />
					<TrumpCard value={'J'} suit={'♣'} />
					<Player1Cards />
					<Player2Cards />
					<Player3Cards />
					<Player4Cards />
				</div>
			</section>
		</>
	);
};

export default Table;
