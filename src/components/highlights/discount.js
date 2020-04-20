import Fade from 'react-reveal/Fade';
import React from 'react';
import Slide from 'react-reveal/Slide';

const Discount = () => {
	const [discountStart, setDiscountStart] = React.useState(0);
	const [discountEnd] = React.useState(30);

	const percentage = () => {
		if (discountStart < discountEnd) {
			setDiscountStart(discountStart + 1);
		}
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			percentage();
		}, 30);
		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<div className="center_wrapper">
			<div className="discount_wrapper">
				<Fade onReveal={() => percentage()}>
					<div className="discount_percentage">
						<span>{discountStart}%</span>
						<span>OFF</span>
					</div>
				</Fade>
				<Slide right>
					<div className="discount_description">
						<h3>Purchase tickets before 20th JUNE</h3>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
							rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
							explicabo.
						</p>
						<div>Button</div>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Discount;
