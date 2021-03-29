import React from 'react';

const Spinner = () => {
	return (
		<div style={containerStyle}>
			<div class="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

const containerStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export default Spinner;
