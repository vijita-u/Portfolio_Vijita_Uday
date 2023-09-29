import React, { useEffect, useRef } from "react";
import "./Reveal.scss";
import { m, LazyMotion, useInView, useAnimation} from "framer-motion";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function Reveal({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	const variant1 = {
		hidden: {
			opacity: 0,
			y: 75,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1,
				duration: 0.5,
			},
		},
	};

	return (
		<LazyMotion features={loadFeatures} strict>
			<div ref={ref} className="reveal">
				<m.div variants={variant1} initial="hidden" animate={mainControls}>
					{children}
				</m.div>
			</div>
		</LazyMotion>
	);
}

export default Reveal;
