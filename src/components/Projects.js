import React, { useState } from "react";
import "./Projects.scss";
import { projectItems, filters } from "../sub-components/projectItems";
import ProjectNavigationBtn from "../sub-components/ProjectNavigationBtn";
import ProjectOption from "../sub-components/ProjectOption";
import { m, LazyMotion } from "framer-motion";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function Projects() {
	const [selectedFilter, setSelectedFilter] = useState("all");
	const [filteredItems, setFilteredItems] = useState(projectItems);

	function handleProjectFilter(selectedCategory) {
		setSelectedFilter(selectedCategory);
		if (selectedCategory == "all") {
			setFilteredItems(projectItems);
		} else {
			const filter = projectItems.filter((item) => item.category.includes(selectedCategory));
			setFilteredItems(filter);
		}
	}

	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div
				className="allProjects"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<div className="projects__header">
					<h2 className="title">My Projects</h2>
				</div>
				<div className="projects__navigation">
					{filters.map((item, id) => (
						<ProjectNavigationBtn
							key={id}
							btnName={item.btnName}
							id={item.id}
							className={`button ${selectedFilter == item.id ? "active" : ""}`}
							onClick={() => handleProjectFilter(item.id)}
						/>
					))}
				</div>
				<div className="projects__projectSection">
					{filteredItems.map((item, id) => (
						<ProjectOption
							image={item.image}
							alt={item.alt}
							buttonName="Check it out"
							title={item.title}
							summary={item.summary}
							id={id}
							link={item.link}
							githubLink={item.githubLink}
							liveLink={item.liveLink}
						/>
					))}
				</div>
			</m.div>
		</LazyMotion>
	);
}

export default Projects;
