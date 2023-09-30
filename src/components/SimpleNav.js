import React from "react";
import "./SimpleNav.scss";
import DownloadCV from "../sub-components/DownloadCV";
import { useNavigate } from "react-router-dom";
import { m, LazyMotion } from "framer-motion";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function SimpleNav({ link }) {
	const navigate = useNavigate();

	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div
				className="simpleNav"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					type: "bounce",
				}}
			>
				<div className="cv_container">
					<svg
						onClick={() => navigate(link)}
						className="backBtn"
						width="59"
						height="35"
						viewBox="0 0 59 57"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-1"
							y="-1"
							width="54.5781"
							height="57"
							rx="27.289"
							transform="matrix(0 -1 -1 0 57 54.5781)"
							stroke="white"
							stroke-width="2"
						/>
						<g clip-path="url(#clip0_586_504)">
							<path
								d="M24.0607 21.8751C24.1567 21.9664 24.2329 22.075 24.2849 22.1947C24.337 22.3144 24.3637 22.4428 24.3637 22.5725C24.3637 22.7021 24.337 22.8305 24.2849 22.9502C24.2329 23.0699 24.1567 23.1786 24.0607 23.2699L20.3425 26.8355L41.2588 26.8355C41.5305 26.8355 41.791 26.939 41.9831 27.1232C42.1752 27.3074 42.2831 27.5572 42.2831 27.8177C42.2831 28.0782 42.1752 28.3281 41.9831 28.5123C41.791 28.6965 41.5305 28.8 41.2588 28.8L20.3527 28.8L24.0607 32.3558C24.1808 32.44 24.2803 32.5482 24.3523 32.673C24.4243 32.7978 24.4671 32.9361 24.4777 33.0783C24.4884 33.2206 24.4666 33.3634 24.4139 33.4967C24.3612 33.6301 24.2788 33.7508 24.1725 33.8506C24.0662 33.9503 23.9386 34.0267 23.7984 34.0744C23.6582 34.122 23.5089 34.1399 23.3608 34.1266C23.2128 34.1133 23.0695 34.0693 22.9409 33.9976C22.8124 33.9259 22.7017 33.8282 22.6165 33.7113L18.6012 29.8608C18.0257 29.3083 17.7025 28.5593 17.7025 27.7784C17.7025 26.9975 18.0257 26.2486 18.6012 25.696L22.6165 21.8456C22.8124 21.6665 23.0743 21.5691 23.3449 21.5746C23.6156 21.5801 23.8729 21.6881 24.0607 21.8751Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_586_504">
								<rect
									width="23.5742"
									height="24.5833"
									fill="white"
									transform="matrix(0 -1 -1 0 42.2831 39.6045)"
								/>
							</clipPath>
						</defs>
					</svg>
					<DownloadCV />
				</div>
			</m.div>
		</LazyMotion>
	);
}

export default SimpleNav;
