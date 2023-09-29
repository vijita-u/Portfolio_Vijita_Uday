import React from "react";
import "./MainTitle.scss";

function MainTitle({ word1, word2 }) {
	return (
		<div className="mainTitle">
			<h2 className="title">
				<span>{word1}</span> {word2}
			</h2>
			<svg width="7" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5 9.5C6.19347 9.5 7.33807 9.0259 8.18198 8.18198C9.0259 7.33807 9.5 6.19347 9.5 5C9.5 3.80653 9.0259 2.66193 8.18198 1.81802C7.33807 0.974106 6.19347 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.0259 3.80653 9.5 5 9.5Z"
					fill="#A5307A"
				/>
			</svg>
		</div>
	);
}

export default MainTitle;
