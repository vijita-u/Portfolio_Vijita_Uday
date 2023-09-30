import React from "react";
import "./ProjectNavigationBtn.scss";

function ProjectNavigationBtn({ id, className, btnName, onClick }) {
	return (
		<div className="projectNavigationBtn">
			<button className={className} type="button" id={id} onClick={onClick}>
				{btnName}
			</button>
		</div>
	);
}

export default ProjectNavigationBtn;
