import React, { useState } from "react";
import "./ProjectsPage.scss";
import ProjectNavigationBtn from "../sub-components/ProjectNavigationBtn";
import ProjectOption from "../sub-components/ProjectOption";
import Reveal from "../sub-components/Reveal";
import DownloadCV from "../sub-components/DownloadCV";
import { allProjectItems, projectItems, filters } from "../sub-components/projectItems";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
	const navigate = useNavigate();
	const [selectedFilter, setSelectedFilter] = useState("all");
	const [filteredItems, setFilteredItems] = useState(allProjectItems);

	function handleProjectFilter(selectedCategory) {
		setSelectedFilter(selectedCategory);
		const filter = projectItems.filter((item) => item.category.includes(selectedCategory));
		setFilteredItems(filter);
	}

	return (
		<div className="projects" id="projects">
			<div className="cv_container">
				<DownloadCV />
			</div>
			<div className="projects__body container">
				<div className="projects__header">
					<Reveal>
						<h2 className="title">Check out my projects</h2>
					</Reveal>
					<Reveal>
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
					</Reveal>
				</div>
				<Reveal>
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
				</Reveal>
				<div className="projects__seeAll" onClick={() => navigate("/Portfolio_Vijita_Uday_ReactJs/projects")}>
					<ProjectNavigationBtn id="seeAll" btnName="See all projects" className="button" />
				</div>
			</div>
		</div>
	);
}

export default ProjectsPage;
