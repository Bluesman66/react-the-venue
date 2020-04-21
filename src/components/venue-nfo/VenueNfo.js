import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {

	const vnItem = (icon, bkg, title, desc) => {
		return (
			<div className="vn_item">
				<div className="vn_outer">
					<div className="vn_inner">
						<div className="vn_icon_square" style={{ background: `${bkg}` }}></div>
						<div className="vn_icon" style={{ background: `url(${icon})` }}></div>
						<div className="vn_title">{title}</div>
						<div className="vn_desc">{desc}</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<Zoom duration={500}>{vnItem(icon_calendar, '#ff4800', 'Event Date & Time', '7 August 2017 @10.00 pm')}</Zoom>
					<Zoom duration={500} delay={500}>
						{vnItem(icon_location, '#ffa800', 'Event Location', '345 Speer Street Oakland, CA 9835')}
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default VenueNfo;
