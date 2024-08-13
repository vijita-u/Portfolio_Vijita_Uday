import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { m, LazyMotion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Services from "./Services";
import ProjectsPage from "./ProjectsPage";
import Skills from "./Skills";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Coverpage from "./Coverpage";
import SimpleNav from "./SimpleNav";
import Projects from "./Projects";
import ProjectDocumentation from "./ProjectDocumentation";
import { useLocation } from "react-router-dom";
import {
	EasybankDoc,
	amazonDoc,
	codingcontestDoc,
	crossITDoc,
	linkedinDoc,
	magmaDoc,
	portfolioDoc,
	thisisdigitalDoc,
	tictactoeDoc,
	rupaliLogisticsDoc,
	foodOrderingDoc,
	sketchBoardDoc,
} from "../sub-components/documentationText";
import {
	amazonImages,
	codingcontestImages,
	easybankImages,
	linkedinImages,
	magmaImages,
	portfolioImages,
	thisisdigitalImages,
	tictactoeImages,
	foodOrderingAppImages,
	sketchBoardImages,
} from "../sub-components/imagesSkills";
import MessageConfirmation from "./MessageConfirmation";
import BackToTop from "../sub-components/BackToTop";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function App() {
	const [coverAnimationProgress, setCoverAnimationProgress] = useState(true);

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		if (navigator.userAgent.match(/samsung/i)) {
			alert(
				"Your browser (Samsung Internet) may not show this website" +
					" correctly. Please consider using a standards-compliant" +
					" browser instead. \n\n" +
					"We recommend Firefox, Microsoft Edge, or Google Chrome."
			);
		}
	}, []);

	return (
		<div className="app">
			{coverAnimationProgress ? (
				<AnimatePresence mode="wait">
					<Coverpage setCoverAnimationProgress={setCoverAnimationProgress} />
				</AnimatePresence>
			) : (
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/message-confirmation" element={<MessageConfirmation />} />
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/sketch-board"
							element={
								<ProjectDocumentation
									title={sketchBoardDoc.title}
									title2={sketchBoardDoc.title2}
									image={sketchBoardDoc.img}
									overview={sketchBoardDoc.overview}
									tools={sketchBoardImages}
									reason={sketchBoardDoc.reason}
									additionalFeatures={sketchBoardDoc.additionalFeatures}
									githubLink={sketchBoardDoc.githubLink}
									liveLink={sketchBoardDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/honger-food-ordering-app"
							element={
								<ProjectDocumentation
									title={foodOrderingDoc.title}
									title2={foodOrderingDoc.title2}
									image={foodOrderingDoc.img}
									overview={foodOrderingDoc.overview}
									tools={foodOrderingAppImages}
									reason={foodOrderingDoc.reason}
									additionalFeatures={foodOrderingDoc.additionalFeatures}
									githubLink={foodOrderingDoc.githubLink}
									liveLink={foodOrderingDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/rupali-logistics-landing-page"
							element={
								<ProjectDocumentation
									title={rupaliLogisticsDoc.title}
									title2={rupaliLogisticsDoc.title2}
									image={rupaliLogisticsDoc.img}
									overview={rupaliLogisticsDoc.overview}
									tools={portfolioImages}
									reason={rupaliLogisticsDoc.reason}
									additionalFeatures={rupaliLogisticsDoc.additionalFeatures}
									githubLink={rupaliLogisticsDoc.githubLink}
									liveLink={rupaliLogisticsDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/portfolio-website"
							element={
								<ProjectDocumentation
									title={portfolioDoc.title}
									title2={portfolioDoc.title2}
									image={portfolioDoc.img}
									overview={portfolioDoc.overview}
									tools={portfolioImages}
									reason={portfolioDoc.reason}
									additionalFeatures={portfolioDoc.additionalFeatures}
									githubLink={portfolioDoc.githubLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/cross-it"
							element={
								<ProjectDocumentation
									title={crossITDoc.title}
									title2={crossITDoc.title2}
									image={crossITDoc.img}
									overview={crossITDoc.overview}
									reason={crossITDoc.reason}
									githubLink={crossITDoc.githubLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/tic-tac-toe"
							element={
								<ProjectDocumentation
									title={tictactoeDoc.title}
									title2={tictactoeDoc.title2}
									image={tictactoeDoc.img}
									overview={tictactoeDoc.overview}
									tools={tictactoeImages}
									reason={tictactoeDoc.reason}
									additionalFeatures={tictactoeDoc.additionalFeatures}
									githubLink={tictactoeDoc.githubLink}
									liveLink={tictactoeDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/coding-contest-watchdog"
							element={
								<ProjectDocumentation
									title={codingcontestDoc.title}
									title2={codingcontestDoc.title2}
									image={codingcontestDoc.img}
									overview={codingcontestDoc.overview}
									tools={codingcontestImages}
									reason={codingcontestDoc.reason}
									additionalFeatures={codingcontestDoc.additionalFeatures}
									githubLink={codingcontestDoc.githubLink}
									liveLink={codingcontestDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/thisisdigital-landingpage"
							element={
								<ProjectDocumentation
									title={thisisdigitalDoc.title}
									title2={thisisdigitalDoc.title2}
									image={thisisdigitalDoc.img}
									overview={thisisdigitalDoc.overview}
									originalLink={thisisdigitalDoc.overviewLink.url}
									originalLinkText={thisisdigitalDoc.overviewLink.text}
									tools={thisisdigitalImages}
									reason={thisisdigitalDoc.reason}
									additionalFeatures={thisisdigitalDoc.additionalFeatures}
									githubLink={thisisdigitalDoc.githubLink}
									liveLink={thisisdigitalDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/easybank-landingpage"
							element={
								<ProjectDocumentation
									title={EasybankDoc.title}
									title2={EasybankDoc.title2}
									image={EasybankDoc.img}
									overview={EasybankDoc.overview}
									tools={easybankImages}
									reason={EasybankDoc.reason}
									additionalFeatures={EasybankDoc.additionalFeatures}
									githubLink={EasybankDoc.githubLink}
									liveLink={EasybankDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/magma-clone"
							element={
								<ProjectDocumentation
									title={magmaDoc.title}
									title2={magmaDoc.title2}
									image={magmaDoc.img}
									overview={magmaDoc.overview}
									originalLink={magmaDoc.overviewLink.url}
									originalLinkText={magmaDoc.overviewLink.text}
									tools={magmaImages}
									reason={magmaDoc.reason}
									additionalFeatures={magmaDoc.additionalFeatures}
									githubLink={magmaDoc.githubLink}
									liveLink={magmaDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/linkedin-clone"
							element={
								<ProjectDocumentation
									title={linkedinDoc.title}
									title2={linkedinDoc.title2}
									image={linkedinDoc.img}
									overview={linkedinDoc.overview}
									tools={linkedinImages}
									reason={linkedinDoc.reason}
									additionalFeatures={linkedinDoc.additionalFeatures}
									githubLink={linkedinDoc.githubLink}
									liveLink={linkedinDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/amazon-clone"
							element={
								<ProjectDocumentation
									title={amazonDoc.title}
									title2={amazonDoc.title2}
									image={amazonDoc.img}
									overview={amazonDoc.overview}
									tools={amazonImages}
									reason={amazonDoc.reason}
									additionalFeatures={amazonDoc.additionalFeatures}
									githubLink={amazonDoc.githubLink}
									liveLink={amazonDoc.liveLink}
								/>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs/projects"
							element={
								<>
									<SimpleNav link="/Portfolio_Vijita_Uday_ReactJs/" />
									<Projects />
								</>
							}
						/>
						<Route
							path="/Portfolio_Vijita_Uday_ReactJs"
							element={
								<LazyMotion features={loadFeatures} strict>
									<m.div
										className="app__body"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 1.2, ease: "easeInOut" }}
									>
										<Nav />
										<Hero />
										<Aboutme />
										<Services />
										<ProjectsPage />
										<Skills />
										<ContactPage />
										<Footer />
										<BackToTop />
									</m.div>
								</LazyMotion>
							}
						/>
					</Routes>
				</AnimatePresence>
			)}
		</div>
	);
}

export default App;
