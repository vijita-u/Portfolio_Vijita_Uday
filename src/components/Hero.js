import React from "react";
import "./Hero.scss";
import { m, LazyMotion } from "framer-motion";
import HeroBackgroundImage2 from "../images/HeroBAckgroundwBG.svg";
import { HashLink } from "react-router-hash-link";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function Hero() {
	const marqueeVariant = {
		hiddenLeft: {
			x: 0,
		},
		hiddenRight: {
			x: -1000,
		},
		visibleLeft: {
			x: -1000,
			transition: {
				ease: "linear",
				repeat: Infinity,
				repeatType: "mirror",
				duration: 20,
				delay: 1.3,
			},
		},
		visibleRight: {
			x: 0,
			transition: {
				ease: "linear",
				repeat: Infinity,
				repeatType: "mirror",
				duration: 20,
				delay: 1.3,
			},
		},
	};
	const heroTextVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				delay: 0.5,
				duration: 1.5,
			},
		},
	};
	const contactBtnVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				delay: 1,
				duration: 0.5,
			},
		},
	};

	return (
		<LazyMotion features={loadFeatures} strict>
			<div className="hero">
				<div className="hero__container">
					<m.div className="hero__text" variants={heroTextVariant} animate="visible" initial="hidden">
						<div className="hero__name">
							<m.h1
								className="hero_marquee"
								variants={marqueeVariant}
								initial="hiddenLeft"
								animate="visibleLeft"
							>
								VIJITA UDAY VIJITA UDAY VIJITA UDAY VIJITA UDAY
							</m.h1>
						</div>

						<div className="hero__status">
							<m.h1
								className="hero_marquee"
								variants={marqueeVariant}
								initial="hiddenRight"
								animate="visibleRight"
							>
								FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTEND DEVELOPER
							</m.h1>
						</div>
					</m.div>

					<HashLink to="#contact" smooth>
						<m.button
							className="hero__contactme"
							type="button"
							variants={contactBtnVariant}
							animate="visible"
							initial="hidden"
						>
							<span>Contact me</span>
							<svg
								width="15"
								height="13"
								viewBox="0 0 22 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_317_864)">
									<path
										d="M16.1066 6.19827C16.0217 6.29511 15.9544 6.41032 15.9084 6.53725C15.8625 6.66419 15.8388 6.80034 15.8388 6.93785C15.8388 7.07537 15.8625 7.21152 15.9084 7.33845C15.9544 7.46539 16.0217 7.5806 16.1066 7.67744L19.3931 11.4587L0.905374 11.4587C0.665254 11.4587 0.434968 11.5684 0.265178 11.7638C0.0953873 11.9591 0 12.2241 0 12.5004C0 12.7766 0.0953873 13.0416 0.265178 13.2369C0.434968 13.4323 0.665254 13.542 0.905374 13.542L19.3841 13.542L16.1066 17.3129C16.0005 17.4021 15.9126 17.5169 15.8489 17.6493C15.7853 17.7816 15.7474 17.9283 15.738 18.0791C15.7286 18.23 15.7479 18.3814 15.7945 18.5228C15.8411 18.6642 15.9139 18.7923 16.0078 18.8981C16.1017 19.0039 16.2146 19.0849 16.3385 19.1354C16.4624 19.186 16.5943 19.2049 16.7252 19.1908C16.8561 19.1767 16.9828 19.1301 17.0964 19.054C17.21 18.9779 17.3079 18.8743 17.3832 18.7504L20.9322 14.667C21.4409 14.0811 21.7266 13.2868 21.7266 12.4587C21.7266 11.6306 21.4409 10.8363 20.9322 10.2504L17.3832 6.16702C17.21 5.9771 16.9785 5.87378 16.7393 5.87964C16.5001 5.88549 16.2726 6.00005 16.1066 6.19827Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0_317_864">
										<rect
											width="25"
											height="21.729"
											fill="white"
											transform="matrix(0 -1 1 0 0 25)"
										/>
									</clipPath>
								</defs>
							</svg>
						</m.button>
					</HashLink>
				</div>

				<m.div className="hero__image">
					<m.img
						src={HeroBackgroundImage2}
						alt="hero background"
						variants={heroTextVariant}
						animate="visible"
						initial="hidden"
					/>
				</m.div>
			</div>
		</LazyMotion>
	);
}

export default Hero;
