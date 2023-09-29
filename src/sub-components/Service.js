import React from "react";
import "./Service.scss";
import Reveal from "./Reveal";

function Service({ Image, serviceTitle, serviceInfo }) {
	return (
		<div className="service">
			<Reveal>
				<div className="image">
					<img src={Image} />
				</div>
			</Reveal>
			<Reveal>
				<h3 className="title">{serviceTitle}</h3>
			</Reveal>
			<Reveal>
				<p className="info">{serviceInfo}</p>
			</Reveal>
		</div>
	);
}

export default Service;
