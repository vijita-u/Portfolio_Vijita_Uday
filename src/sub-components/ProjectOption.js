import React from "react";
import "./ProjectOption.scss";
import GithubLogo from "../images/GithubLogo.svg";
import LiveLinkLogo from "../images/LiveLinkLogo.svg";
import ChecknContactBtn from "./ChecknContactBtn";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectOption({ image, alt, title, summary, buttonName, link, githubLink, liveLink }) {
	const navigate = useNavigate();

	return (
		<div className="projectOption">
			<div className="projectOption__OGstate">
				<img src={image} alt={alt} />
			</div>
			<div className="projectOption__hoverState">
				<div className="projectOption__content">
					<svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5 9.5C6.19347 9.5 7.33807 9.0259 8.18198 8.18198C9.0259 7.33807 9.5 6.19347 9.5 5C9.5 3.80653 9.0259 2.66193 8.18198 1.81802C7.33807 0.974106 6.19347 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.0259 3.80653 9.5 5 9.5Z"
							fill="#A5307A"
						/>
					</svg>
					<div className="projectOption__title">
						<h2>{title}</h2>
					</div>
					<div className="projectOption__summary">
						<p>{summary}</p>
					</div>
					<ChecknContactBtn buttonName={buttonName} onClick={() => navigate(link)} />
					<div className="projectOption__links">
						<Link to={githubLink} target="_blank">
							<img src={GithubLogo} alt="github link" className="links" />
						</Link>
						{liveLink && (
							<Link to={liveLink} target="_blank">
								<img src={LiveLinkLogo} alt="live link" className="links" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectOption;
