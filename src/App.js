import './resources/styles.css';

import { Featured } from './components/featured';
import { Header } from './components/header-footer';
import { Highlights } from './components/highlights';
import React from 'react';
import { VenueNfo } from './components/venue-nfo';

const App = () => {
	return (
		<div style={{ height: '1500px', background: 'cornflowerblue' }}>
			<Header />
			<Featured />
			<VenueNfo />
			<Highlights />
		</div>
	);
};

export default App;
