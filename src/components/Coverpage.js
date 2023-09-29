import React, { useEffect } from "react";
import "./Coverpage.scss";
import { m, LazyMotion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function Coverpage({ setCoverAnimationProgress }) {
	useEffect(() => {
		setTimeout(() => {
			setCoverAnimationProgress(false);
		}, 8000);
	}, []);

	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div
				className="coverpage"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<m.div className="coverpage__message">
					<m.h1
						animate={{
							opacity: [1, 0],
							transition: {
								delay: 11,
								duration: 0.5,
							},
						}}
					>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.pauseFor(1300)
									.typeString("Well,")
									.pauseFor(280)
									.deleteAll()
									.typeString("hello there.")
									.pauseFor(280)
									.start();
							}}
							options={{
								delay: 190,
							}}
						/>
					</m.h1>
				</m.div>
			</m.div>
		</LazyMotion>
	);
}

export default Coverpage;
