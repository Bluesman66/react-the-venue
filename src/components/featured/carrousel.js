import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import slide_two from '../../resources/images/slide_two.jpg';

const Carrousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
	};

	const imageContent = (imageName) => {
		return <div className="carrousel_image" style={{ background: `url(${imageName})`, height: '100vh' }}></div>;
	};

	return (
		<div className="carrousel_wrapper">
			<Slider {...settings}>
				<div>{imageContent(slide_one)}</div>
				<div>{imageContent(slide_two)}</div>
				<div>{imageContent(slide_three)}</div>
			</Slider>
		</div>
	);
};

export default Carrousel;
