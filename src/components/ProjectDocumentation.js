import React from "react";
import "./ProjectDocumentation.scss";
import SimpleNav from "./SimpleNav";
import LinksContainer from "../sub-components/LinksContainer";
import DocumentParts from "../sub-components/DocumentParts";
import { m, LazyMotion } from "framer-motion";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function ProjectDocumentation({
	title,
	title2,
	image,
	overview,
	originalLink,
	originalLinkText,
	tools,
	reason,
	additionalFeatures,
	githubLink,
	liveLink,
}) {
	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div
				className="projectDocumentation"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<SimpleNav link="/projects" />
				<div className="projectDocumentation__body">
					<h1 className="projectDocumentation__title">
						{title} <span>{title2}</span>
					</h1>
					<LinksContainer githubLink={githubLink} liveLink={liveLink} />
					<div className="projectDocumentation__image">
						<img src={image} alt="Amazon Mockup" />
					</div>
					<div className="projectDocumentation__info">
						{overview && <DocumentParts title="Overview" info={overview} />}
						{tools && (
							<div className="documentParts">
								<h3 className="documentParts__heading">Programming Tools</h3>
								<div className="documentParts__imageContainer">
									{tools.map((item) => (
										<img className="skill_images" key={item.id} src={item.src} alt={item.alt} />
									))}
								</div>
							</div>
						)}
						{reason && <DocumentParts title="Why this project ?" info={reason} />}
						{additionalFeatures && <DocumentParts title="Features from my end" info={additionalFeatures} />}
						<h5 className="originalLink__container">
							<a href={originalLink} className="originalLink" target="_blank" rel="noopener noreferrer">
								{originalLinkText}
							</a>
						</h5>
						<LinksContainer githubLink={githubLink} liveLink={liveLink} />
					</div>
				</div>
			</m.div>
		</LazyMotion>
	);
}

export default ProjectDocumentation;
