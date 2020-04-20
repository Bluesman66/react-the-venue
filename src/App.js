import './resources/styles.css';

import { Featured } from './components/featured';
import { Header } from './components/header-footer';
import React from 'react';

const App = () => {
	return (
		<div style={{ height: '1500px', background: 'cornflowerblue' }}>
			<Header />
			<Featured />
		</div>
	);
};

export default App;
