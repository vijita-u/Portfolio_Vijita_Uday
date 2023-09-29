import React from "react";
import "./NavLink.scss";
import { HashLink } from "react-router-hash-link";
import { m, LazyMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const loadFeatures = () => import("../features.js").then((response) => response.default);

function NavLinkTags({ title, href, onClick }) {
	const { hash } = useLocation();
	const isActive = (ourLocation) => hash === ourLocation;

	const linkVariant = {
		hidden: {
			y: "100vh",
			transition: {
				duration: 0.5,
				ease: [0.37, 0, 0.63, 1],
			},
		},
		visible: {
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0, 0.55, 0.45, 1],
			},
		},
	};

	const scrollWidthOffset = (el) => {
		setTimeout(() => {
			const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
			const yOffset = -80;
			window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
		}, 600);
	};

	return (
		<LazyMotion features={loadFeatures} strict>
			<m.div variants={linkVariant} initial="hidden" animate="visible">
				<HashLink
					to={href}
					smooth
					scroll={(el) => scrollWidthOffset(el)}
					className={isActive(href) ? "nav__link activeLink" : "nav__link"}
					onClick={onClick}
				>
					{title}
				</HashLink>
			</m.div>
		</LazyMotion>
	);
}

export default NavLinkTags;
