import React from "react";
import "./ContactInput.scss";
import Reveal from "./Reveal";

function ContactInput({ tag, title, name, type, placeholder }) {
	return (
		<Reveal>
			<div className="contactInput">
				<h3 className="contactInput__header">{title}</h3>
				{/* 1 for input tag */}
				{tag == 1 ? (
					<input type={type} name={name} className="contactInput__input" placeholder={placeholder} required/>
				) : (
					<textarea name={name} className="contactInput__input textarea" placeholder={placeholder} required></textarea>
				)}
			</div>
		</Reveal>
	);
}

export default ContactInput;
