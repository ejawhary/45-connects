import React, { useContext, useEffect } from 'react';
import Branding from './Branding';
import Timer from './Timer';
import Player1Cards from '../cards/playerCards/Player1Cards';
import Player2HandTL from '../cards/playerCards/Player2HandTL';
import Player3HandTR from '../cards/playerCards/Player3HandTR';
import Player4HandBR from '../cards/playerCards/Player4HandBL';
import Deck from '../cards/Deck';
import TrumpCard from '../cards/TrumpCard';
const Table = () => {
	return (
		<>
			<section className="table-container" style={{ zIndex: 100 }}>
				<div className="table">
					<Branding />
					<Timer />
					<Deck />
					<TrumpCard value={'J'} suit={'♣'} />
					<Player1Cards />
					<Player2HandTL />
					<Player3HandTR />
					<Player4HandBR />
				</div>
			</section>
		</>
	);
};

export default Table;
