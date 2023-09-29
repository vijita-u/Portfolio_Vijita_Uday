import React, { useRef, useState } from "react";
import "./Nav.scss";
import { m, LazyMotion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import DownloadCV from "../sub-components/DownloadCV";
import NavLinkTags from "../sub-components/NavLink";
import { HashLink } from "react-router-hash-link";

const loadFeatures = () => import("../features.js").then((response) => response.default);

const navLinks = [
	{
		title: "about me",
		href: "#aboutme",
	},
	{
		title: "services",
		href: "#services",
	},
	{
		title: "projects",
		href: "#projects",
	},
	{
		title: "skills",
		href: "#skills",
	},
	{
		title: "contact",
		href: "#contact",
	},
];

function Nav() {
	const [open, setOpen] = useState(false);
	const checkboxRef = useRef(null);

	// hide and show the navbar on scroll
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious(); // get previous scroll value
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const navbarVariant = {
		hidden: {
			y: "-100%",
		},
		visible: {
			y: 0,
			transition: {
				delay: 0.01,
				duration: 0.8,
				ease: "easeInOut",
			},
		},
	};

	const menuVars = {
		hidden: {
			scaleY: 0,
		},
		visible: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const handleNavigations = () => {
		checkboxRef.current.checked = false;
		setOpen(!open);
	};

	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div className="nav" variants={navbarVariant} animate={hidden ? "hidden" : "visible"}>
				<HashLink to="#">
					<m.div
						className="nav__logo"
						whileHover={{ rotate: [0, -5, 0, 5, 0, -8, 0, 8, 0] }}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.8,
							duration: 0.8,
							type: "bounce",
						}}
					>
						Vu.
					</m.div>
				</HashLink>
				<m.div
					className="nav__cvMenu"
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.8,
						duration: 0.8,
						type: "bounce",
					}}
				>
					<input
						ref={checkboxRef}
						type="checkbox"
						name="nav"
						className="nav__toggleInput"
						id="nav-toggle-box"
					/>
					<label htmlFor="nav-toggle-box" className="nav__toggleLabel">
						<m.div
							className="nav__hamburger"
							onClick={() => setOpen(!open)}
							whileHover={{ rotate: [0, -5, 0, 5, 0, -8, 0, 8, 0] }}
						>
							<span className="firstLine"></span>
							<span className="secondLine"></span>
						</m.div>
					</label>
					<DownloadCV />
					<AnimatePresence>
						{open && (
							<m.nav
								className="nav__options"
								variants={menuVars}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								{/* Container for links */}
								<div
									className="nav__container"
								>
									{navLinks.map((link, index) => {
										return (
											<div
												key={index}
												className="nav__linkContainer"
												// style={{ background: "red", border: "1px solid black", }}
											>
												<NavLinkTags
													title={link.title}
													href={link.href}
													onClick={handleNavigations}
												/>
											</div>
										);
									})}
								</div>
							</m.nav>
						)}
					</AnimatePresence>
				</m.div>
			</m.div>
		</LazyMotion>
	);
}

export default Nav;
