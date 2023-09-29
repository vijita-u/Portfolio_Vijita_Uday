import React from "react";
import "./Skills.scss";
import SkillsSlider from "../sub-components/SkillsSlider";
import skillImages from "../sub-components/imagesSkills";

function Skills() {
	return (
		<div className="skills" id="skills">
			<SkillsSlider images={skillImages} />
		</div>
	);
}

export default Skills;
