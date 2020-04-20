import Carrousel from './carrousel';
import React from 'react';
import TimeUntil from './time-until';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carrousel />
			<div className="artist_name">
				<div className="wrapper">Ariana Grande</div>
			</div>
			<TimeUntil />
		</div>
	);
};

export default Featured;
