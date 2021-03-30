import React, { useContext, useEffect } from 'react';
import Player1Cards from '../cards/playerCards/Player1Cards';
import Player2Hand from '../cards/playerCards/Player2Hand';
import Deck from '../cards/Deck';
import TrumpCard from '../cards/TrumpCard';
const Table = () => {
	return (
		<>
			<section className="table-container">
				<div className="table">
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
					<Player2Hand />
				</div>
			</section>
		</>
	);
};

export default Table;
