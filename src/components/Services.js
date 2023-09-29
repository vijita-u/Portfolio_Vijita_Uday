import React from "react";
import "./Services.scss";
import MainTitle from "../sub-components/MainTitle";
import Service from "../sub-components/Service";
import FrontendImage from "../images/frontend service.svg";
import UIDesignImage from "../images/ui design.svg";
import Reveal from "../sub-components/Reveal";
import DownloadCV from "../sub-components/DownloadCV";

function Services() {
	return (
		<div className="services" id="services">
			<div className="cv_container">
				<DownloadCV />
			</div>
			<div className="services__body container">
				<div className="services__overview">
					<Reveal>
						<MainTitle word1="Services" word2="offered" />
					</Reveal>
					<Reveal>
						<div className="info">
							<p>
								Welcome to my world of web wizardry! I'm here to help bring your dream website to life.
								With a strong foundation in frontend development and a good understanding of UI/UX
								design, I offer a holistic approach from concept to execution.
							</p>
						</div>
					</Reveal>
				</div>
				<div className="services__options">
					<Service
						Image={FrontendImage}
						serviceTitle="Front-End Web Development"
						serviceInfo="I specialize in turning your ideas into functional and visually appealing websites. Proficient in HTML, CSS, JavaScript, and React, I utilize cutting-edge technologies to craft engaging user experiences. My focus on performance optimization ensures your website not only looks great but loads quickly."
					/>
					<Service
						Image={UIDesignImage}
						serviceTitle="UX/UI Design"
						serviceInfo="While I'm not a design expert, I do have a grasp of UI/UX concepts that benefits my work as a frontend developer. I use Figma and a basic understanding of design principles to create user interfaces with usability in mind. My designs aim to enhance user experiences and create visually pleasing interfaces. Let's collaborate to bring your digital vision to life, from concept to code and design!"
					/>
				</div>
			</div>
		</div>
	);
}

export default Services;
