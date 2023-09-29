import React from "react";
import "./DocumentParts.scss";

function DocumentParts({ title, info }) {
	return (
		<div className="documentParts">
			<h3 className="documentParts__heading">{title}</h3>
			<div className="documentParts__info">{info}</div>
		</div>
	);
}

export default DocumentParts;
