import React from "react";
import "./Aboutme.scss";
import ProfilePhoto from "../images/Profile Photo.svg";
import MainTitle from "../sub-components/MainTitle";
import Reveal from "../sub-components/Reveal";
import DownloadCV from "../sub-components/DownloadCV";

function Aboutme() {
	return (
		<div className="aboutme">
			<div className="AMhero" id="aboutme">
				<div className="cv_container">
					<DownloadCV />
				</div>
				<Reveal>
					<div className="AMhero__header">
						<div className="line1">
							<h2>
								Your{" "}
								<span>
									<em>Web</em>
								</span>{" "}
								Vision
							</h2>
							<svg
								width="7"
								height="10"
								viewBox="0 0 7 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.96501 6.01731C4.45862 6.45607 3.81994 6.71268 3.15076 6.74624C2.48158 6.7798 1.82042 6.58838 1.27268 6.20249C0.724942 5.8166 0.322148 5.25845 0.128508 4.61702C-0.0651333 3.97559 -0.0384747 3.2878 0.204234 2.66329C0.446942 2.03877 0.891729 1.51348 1.46769 1.17114C2.04366 0.828805 2.71765 0.689134 3.38222 0.774391C4.0468 0.859648 4.66371 1.16492 5.13461 1.64156C5.60551 2.1182 5.9033 2.73875 5.98051 3.40431C6.24751 4.76181 6.24451 6.37956 5.63251 7.82931C4.98601 9.35931 3.68175 10.6493 1.455 11.2321C1.3833 11.2516 1.30843 11.2567 1.23474 11.2471C1.16105 11.2375 1.08999 11.2134 1.02567 11.1761C0.961348 11.1389 0.905038 11.0893 0.859995 11.0302C0.814951 10.9711 0.782065 10.9037 0.763238 10.8318C0.744411 10.7599 0.740016 10.685 0.750306 10.6114C0.760596 10.5378 0.785368 10.467 0.82319 10.403C0.861012 10.339 0.911134 10.2832 0.970662 10.2387C1.03019 10.1942 1.09794 10.162 1.17001 10.1438C3.06826 9.64656 4.08901 8.59131 4.59601 7.39131C4.77886 6.95152 4.90293 6.48954 4.96501 6.01731Z"
									fill="black"
								/>
							</svg>
						</div>
						<div className="line2">
							<h2>
								My <span>Frontend</span> Execution
							</h2>
							<svg
								width="7"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 9.5C6.19347 9.5 7.33807 9.0259 8.18198 8.18198C9.0259 7.33807 9.5 6.19347 9.5 5C9.5 3.80653 9.0259 2.66193 8.18198 1.81802C7.33807 0.974106 6.19347 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.0259 3.80653 9.5 5 9.5Z"
									fill="#A5307A"
								/>
							</svg>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="AMhero__image">
						<img src={ProfilePhoto} alt="profile" />
					</div>
				</Reveal>
			</div>
			<div className="AMcontent">
				<div className="cv_container">
					<DownloadCV />
				</div>
				<div className="AMcontent__body main">
					<Reveal>
						<MainTitle word1="About" word2="me" />
					</Reveal>
					<Reveal>
						<div className="AMcontent__info">
							<p>
								Hi, I'm a self-taught frontend React developer who has transitioned from numbers to
								pixels, originally coming from a finance background. I wield HTML, CSS, JavaScript,
								React, and Firebase to craft captivating web experiences. With animation wizardry using
								GSAP and Framer Motion, I blend finance smarts with frontend flair to create
								trend-setting projects.
							</p>
							<p>Come, let’s make web wonders together!🌟 </p>
						</div>
					</Reveal>
				</div>
			</div>
		</div>
	);
}

export default Aboutme;
