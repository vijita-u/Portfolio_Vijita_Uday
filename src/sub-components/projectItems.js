import AmazonMockupImage from "../images/Amazon Mockup.png";
import LinkedinMockupImage from "../images/LinkedIn Mockup.png";
import MagmaMockupImage from "../images/Magma Mockup.png";
import EasybankMockupImage from "../images/EasyBank Mockup.png";
import DigitalMockupImage from "../images/Digital Mockup.png";
import TicTacToeMockupImage from "../images/Tic-Tac-Toe Mockup.png";
import CodingContestMockup from "../images/CodingContestMockup.png";
import PortfolioMockup from "../images/PortfolioMockup.png";
import CrossItMockup from "../images/CrossITMockup.png";
import RupaliLogisticsMockup from "../images/RupaliLogistics Mockup.png";
import FoodOrderingMockup from "../images/FoodOrderingMockup.png";
import SketchBoardMockup from "../images/SketchBoardMockup.png";

export const filters = [
	{
		id: "all",
		btnName: "All Projects",
	},
	{
		id: "web",
		btnName: "Website Development",
	},
	{
		id: "app",
		btnName: "App Development",
	},
	{
		id: "wip",
		btnName: "Work in Progress",
	},
];

export const allProjectItems = [
	{
		image: AmazonMockupImage,
		alt: "Amazon-Clone",
		title: "Full-stack Amazon Clone",
		summary:
			"Full-stack amazon clone with user authentication and payment functionality. Built using React JS, Firebase cloud functions, Stripe and many other interesting technologies.",
		link: "/Portfolio_Vijita_Uday_ReactJs/amazon-clone",
		category: "all",
		githubLink: "https://github.com/vijita-u/Amazon-Clone-ReactJs",
		liveLink: "https://clone-using-react-js-c2ec1.web.app/",
	},
	{
		image: RupaliLogisticsMockup,
		alt: "Freelance Project",
		title: "Rupali Logistics Website",
		summary:
			"Crafted a visually engaging landing page for a freight company, handling design to development with React and Framer Motion.",
		category: "all",
		link: "/Portfolio_Vijita_Uday_ReactJs/rupali-logistics-landing-page",
		liveLink: "https://www.rupalilogistics.com/",
	},
	{
		image: MagmaMockupImage,
		alt: "Magma Clone",
		title: "Magma's Landing Page Clone",
		summary:
			"Recreated a website inspired by Magma , featuring GSAP, Locomotive, ScrollTrigger, and HTML5 Canvas to showcase captivating visuals and animations.",
		category: "all",
		link: "/Portfolio_Vijita_Uday_ReactJs/magma-clone",
		githubLink: "https://github.com/vijita-u/Magma_Landing-Page_Clone",
		liveLink: "https://vijita-u.github.io/Magma_Landing-Page_Clone/",
	},
	{
		image: EasybankMockupImage,
		alt: "Easybank Landing Page",
		title: "Easybank Landing Page",
		summary:
			"An intermediate-level challenge on 'Frontend Mentor' to practice web responsiveness, sass and basics of website development.",
		category: "all",
		link: "/Portfolio_Vijita_Uday_ReactJs/easybank-landingpage",
		githubLink: "https://github.com/vijita-u/EasyBank_Landing_Page",
		liveLink: "https://vijita-u.github.io/EasyBank_Landing_Page/",
	},
];

export const projectItems = [
	{
		image: AmazonMockupImage,
		alt: "Amazon-Clone",
		title: "Full-stack Amazon Clone",
		summary:
			"Full-stack amazon clone with user authentication and payment functionality. Built using React JS, Firebase cloud functions, Stripe and many other interesting technologies.",
		category: "all app",
		link: "/Portfolio_Vijita_Uday_ReactJs/amazon-clone",
		githubLink: "https://github.com/vijita-u/Amazon-Clone-ReactJs",
		liveLink: "https://clone-using-react-js-c2ec1.web.app/",
	},
	{
		image: LinkedinMockupImage,
		alt: "LinkedIn-Clone",
		title: "LinkedIn Clone",
		summary:
			"LinkedIn clone with user authentication functionality built using an array of technologies, including React JS, Redux, Firebase, and more.",
		category: "all app",
		link: "/Portfolio_Vijita_Uday_ReactJs/linkedin-clone",
		githubLink: "https://github.com/vijita-u/LinkedIn-Clone-ReactJs/",
		liveLink: "https://linkedin-clone-using-reactjs.web.app/",
	},
	{
		image: RupaliLogisticsMockup,
		alt: "Freelance Project",
		title: "Rupali Logistics Website",
		summary:
			"Crafted a visually engaging landing page for a freight company, handling design to development with React and Framer Motion.",
		category: "all website",
		link: "/Portfolio_Vijita_Uday_ReactJs/rupali-logistics-landing-page",
		liveLink: "https://www.rupalilogistics.com/",
	},
	{
		image: MagmaMockupImage, 
		alt: "Magma Clone",
		title: "Magma's Landing Page Clone",
		summary:
			"Recreated a website inspired by Magma , featuring GSAP, Locomotive, ScrollTrigger, and HTML5 Canvas to showcase captivating visuals and animations.",
		category: " all website",
		link: "/Portfolio_Vijita_Uday_ReactJs/magma-clone",
		githubLink: "https://github.com/vijita-u/Magma_Landing-Page_Clone",
		liveLink: "https://vijita-u.github.io/Magma_Landing-Page_Clone/",
	},
	{
		image: EasybankMockupImage,
		alt: "Easybank Landing Page",
		title: "Easybank Landing Page",
		summary:
			"An intermediate-level challenge on Frontend Mentor to practice web responsiveness, sass and basics of website development.",
		category: "all website",
		link: "/Portfolio_Vijita_Uday_ReactJs/easybank-landingpage",
		githubLink: "https://github.com/vijita-u/EasyBank_Landing_Page",
		liveLink: "https://vijita-u.github.io/EasyBank_Landing_Page/",
	},
	{
		image: DigitalMockupImage,
		alt: "'This is Digital' Landing Page",
		title: "'this is digital's Landing Page Clone",
		summary: "Created to kickstart my journey with GSAP Timelines, Scroll Trigger, and Swiper JS.",
		category: "web",
		link: "/Portfolio_Vijita_Uday_ReactJs/thisisdigital-landingpage",
		githubLink: "https://github.com/vijita-u/thisisdigital_Landing-page_Clone",
		liveLink: "https://vijita-u.github.io/thisisdigital_Landing-page_Clone/",
	},
	{
		image: TicTacToeMockupImage,
		alt: "This is Digital Landing Page",
		title: "Tic-Tac-Toe using React Js",
		summary:
			"My first React project built with the help of React's official documentation. Furthermore, solved a few additional challenges provided by them to get a better idea of the framework.",
		category: "app",
		link: "/Portfolio_Vijita_Uday_ReactJs/tic-tac-toe",
		githubLink: "https://github.com/vijita-u/Tic-Tac-Toe_ReactJS/",
		liveLink: "https://vijita-u.github.io/Tic-Tac-Toe_ReactJS/",
	},
	{
		image: CodingContestMockup,
		alt: "Coding Contest Watchdog",
		title: "Coding Contest Watchdog",
		summary:
			"A dynamic web application offering a real-time database of forthcoming coding contests, continuously updated through AJAX requests.",
		category: "app",
		link: "/Portfolio_Vijita_Uday_ReactJs/coding-contest-watchdog",
		githubLink: "https://github.com/vijita-u/Coding-Contest-Watchdog",
		liveLink: "https://vijita-u.github.io/Coding-Contest-Watchdog/",
	},
	{
		image: PortfolioMockup,
		alt: "Portfolio Website",
		title: "Online Portfolio Website",
		summary:
			"I've developed an online portfolio that reflects both myself and my projects, utilizing React JS and incorporating Framer Motion for animations.",
		category: "web",
		link: "/Portfolio_Vijita_Uday_ReactJs/portfolio-website",
		githubLink: "https://github.com/vijita-u/Portfolio_Vijita_Uday_ReactJs",
	},
	{
		image: CrossItMockup,
		alt: "Cross It",
		title: "CrossIT",
		summary:
			"This is an ongoing full-stack project designed to revolutionize how students manage their time, tasks, and goals. While there is no code yet, the project is currently in the design phase, with Figma designs nearly complete.",
		category: "wip",
		link: "/Portfolio_Vijita_Uday_ReactJs/cross-it",
		githubLink: "https://github.com/vijita-u/Cross-IT",
	},
	{
		image: FoodOrderingMockup,
		alt: "Honger: Food Ordering App",
		title: "Honger: Food Ordering App",
		summary:
			"This project implements a food ordering application similar to Swiggy. It utilizes Swiggy's live API to fetch restaurant data and integrates Redux for state management. Users can browse restaurants, add items to their cart, and manage their orders.",
		category: "wip",
		link: "/Portfolio_Vijita_Uday_ReactJs/honger-food-ordering-app",
		githubLink: "https://github.com/vijita-u/Food-ordering-application",
	},
	{
		image: SketchBoardMockup,
		alt: "Sketch Board",
		title: "Sketch Board",
		summary:
			"A sketch board layout with realtime 2D graphics using Canvas API.",
		category: "web app",
		link: "/Portfolio_Vijita_Uday_ReactJs/sketch-board",
		liveLink: "https://sketch-board-9djl.onrender.com/",
		githubLink: "https://github.com/vijita-u/sketch-board",
	},
];
