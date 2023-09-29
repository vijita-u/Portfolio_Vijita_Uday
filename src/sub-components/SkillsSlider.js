import React from "react";
import "./SkillsSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillsSlider({ images }) {
	var settings = {
		infinite: true,
		speed: 10000,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		pauseOnHover: true,
		swipeToSlide: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div className="skillsSlider">
			<Slider {...settings}>
				{images.map((image) => (
					<div className="skill__container" key={image.id} style={{ backgroundColor: "red" }}>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default SkillsSlider;
