import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				title="Chelyabinskiy Gosudarstvennyy Akademicheskiy Teatr Opery I Baleta Im. M. I. Glinki"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2278.9663062898744!2d61.40577177271741!3d55.16636562685174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8b5b58394705e0e!2sChelyabinskiy%20Gosudarstvennyy%20Akademicheskiy%20Teatr%20Opery%20I%20Baleta%20Im.%20M.%20I.%20Glinki!5e0!3m2!1sen!2sru!4v1587445711107!5m2!1sen!2sru"
				width="100%"
				height="500"
				frameborder="0"
				allowfullscreen=""
			></iframe>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
