import React from "react";
import "./BackToTop.scss";
import { HashLink } from "react-router-hash-link";
import { m, LazyMotion } from "framer-motion";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function BackToTop() {
	const variant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				delay: 1,
				duration: 1.5,
			},
		},
	};

	return (
		<LazyMotion features={loadFeatures} strict>
			<HashLink to="#" smooth className="backToTop">
				<m.svg
					variants={variant}
					animate="visible"
					initial="hidden"
					className="backToTop__arrow"
					width="53"
					height="50"
					viewBox="0 0 53 54"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="51.5"
						y="52.25"
						width="50.5"
						height="51.25"
						rx="25.25"
						transform="rotate(-180 51.5 52.25)"
						stroke="white"
						stroke-width="2"
						fill="#7b7cf1"
					/>
					<g clip-path="url(#clip0_224_673)">
						<path
							d="M20.2982 21.7156C20.3829 21.8023 20.4837 21.8711 20.5948 21.918C20.7059 21.9649 20.825 21.9891 20.9453 21.9891C21.0656 21.9891 21.1848 21.9649 21.2958 21.918C21.4069 21.8711 21.5077 21.8023 21.5925 21.7156L24.901 18.3598L24.901 37.2376C24.901 37.4828 24.9971 37.718 25.168 37.8913C25.3389 38.0647 25.5708 38.1621 25.8125 38.1621C26.0542 38.1621 26.2861 38.0647 26.457 37.8913C26.6279 37.718 26.724 37.4828 26.724 37.2376L26.724 18.369L30.0234 21.7156C30.1016 21.824 30.202 21.9138 30.3178 21.9788C30.4336 22.0437 30.5619 22.0824 30.6939 22.092C30.8259 22.1016 30.9584 22.0819 31.0822 22.0343C31.2059 21.9868 31.318 21.9124 31.4105 21.8165C31.5031 21.7206 31.574 21.6054 31.6182 21.4789C31.6624 21.3523 31.6789 21.2176 31.6666 21.0839C31.6543 20.9503 31.6135 20.821 31.5469 20.7049C31.4804 20.5889 31.3897 20.489 31.2813 20.4121L27.7083 16.7882C27.1956 16.2688 26.5007 15.9771 25.776 15.9771C25.0514 15.9771 24.3565 16.2688 23.8438 16.7882L20.2708 20.4121C20.1047 20.589 20.0143 20.8253 20.0194 21.0696C20.0245 21.3138 20.1247 21.5461 20.2982 21.7156Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_224_673">
							<rect
								width="21.875"
								height="22.1875"
								fill="#7b7cf1"
								transform="matrix(-1 0 0 -1 36.75 38.1621)"
							/>
						</clipPath>
					</defs>
				</m.svg>
			</HashLink>
		</LazyMotion>
	);
}

export default BackToTop;
