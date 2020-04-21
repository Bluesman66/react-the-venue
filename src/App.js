import './resources/styles.css';

import { Footer, Header } from './components/header-footer';

import { Featured } from './components/featured';
import { Highlights } from './components/highlights';
import { Location } from './components/location';
import { Pricing } from './components/pricing';
import React from 'react';
import { VenueNfo } from './components/venue-nfo';

const App = () => {
	return (
		<div style={{ height: '1500px', background: 'cornflowerblue' }}>
			<Header />
			<Featured />
			<VenueNfo />
			<Highlights />
			<Pricing />
			<Location />
			<Footer />
		</div>
	);
};

export default App;
