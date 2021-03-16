import React from 'react';
import CardFront from '../cards/CardFront';
import CardBack from '../cards/CardBack';

const Table = () => {
	return (
		<>
			<section class="table-container">
				<div class="table">
					<div class="branding">
						<h1 class="ff red-text">45</h1>
						<h2 class="connects">Connects</h2>
					</div>
					<div class="timer">
						<span>14:45</span>
					</div>
					<CardFront />
					<CardBack />
				</div>
			</section>
		</>
	);
};

export default Table;
