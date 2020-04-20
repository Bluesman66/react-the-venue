import Carrousel from './carrousel';
import React from 'react';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carrousel />
			<div className="artist_name">
				<div className="wrapper">Ariana Grande</div>
			</div>
		</div>
	);
};

export default Featured;
