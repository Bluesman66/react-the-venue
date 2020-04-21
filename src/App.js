import './resources/styles.css';

import { Footer, Header } from './components/header-footer';

import { Element } from 'react-scroll';
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
			<Element name="featured">
				<Featured />
			</Element>
			<Element name="venuenfo">
				<VenueNfo />
			</Element>
			<Element name="highlights">
				<Highlights />
			</Element>
			<Element name="pricing">
				<Pricing />
			</Element>
			<Element name="location">
				<Location />
			</Element>
			<Footer />
		</div>
	);
};

export default App;
