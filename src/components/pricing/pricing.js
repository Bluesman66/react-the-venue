import { MyButton } from '../utils';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
	const [state] = React.useState({
		prices: [100, 150, 250],
		positions: ['Balcony', 'Medium', 'Star'],
		desc: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
			'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		],
		linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
		delay: [500, 0, 500],
	});

	const showBoxes = () =>
		state.prices.map((box, i) => (
			<Zoom delay={state.delay[i]} key={i}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>${state.prices[i]}</span>
							<span>{state.positions[i]}</span>
						</div>
						<div className="pricing_description">{state.desc[i]}</div>
						<div className="pricing_buttons">
							<MyButton text="Purchase" bck="#ffa800" color="#ffffff" link={state.linkto[i]} />
						</div>
					</div>
				</div>
			</Zoom>
		));

	return (
		<div className="bck_black">
			<div className="center_wrapper pricing_section">
				<h2>Pricing</h2>
				<div className="pricing_wrapper">{showBoxes()}</div>
			</div>
		</div>
	);
};

export default Pricing;
