import React from "react";
import "./Footer.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Reveal from "../sub-components/Reveal";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__body container">
				<Reveal>
					<div className="footer__socialLinks">
						<Link to="https://www.linkedin.com/in/vijita-uday/" target="_blank" rel="noopener noreferrer">
							<svg
								className="social__links"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M5.625 1.875C4.63044 1.875 3.67661 2.27009 2.97335 2.97335C2.27009 3.67661 1.875 4.63044 1.875 5.625V24.375C1.875 25.3696 2.27009 26.3234 2.97335 27.0266C3.67661 27.7299 4.63044 28.125 5.625 28.125H24.375C25.3696 28.125 26.3234 27.7299 27.0266 27.0266C27.7299 26.3234 28.125 25.3696 28.125 24.375V5.625C28.125 4.63044 27.7299 3.67661 27.0266 2.97335C26.3234 2.27009 25.3696 1.875 24.375 1.875H5.625ZM7.69125 9.93187C8.2855 9.93187 8.85541 9.69581 9.27561 9.27561C9.69581 8.85541 9.93187 8.2855 9.93187 7.69125C9.93187 7.097 9.69581 6.52709 9.27561 6.10689C8.85541 5.68669 8.2855 5.45063 7.69125 5.45063C7.097 5.45063 6.52709 5.68669 6.10689 6.10689C5.68669 6.52709 5.45063 7.097 5.45063 7.69125C5.45063 8.2855 5.68669 8.85541 6.10689 9.27561C6.52709 9.69581 7.097 9.93187 7.69125 9.93187ZM9.56625 24.0244V11.6888H5.81625V24.0244H9.56625ZM12.0562 11.6888H15.8063V13.3406C16.3594 12.4744 17.5744 11.3081 19.8338 11.3081C22.53 11.3081 23.9944 13.095 23.9944 16.4944C23.9944 16.6575 24.0094 17.4019 24.0094 17.4019V24.0225H20.2594V17.4037C20.2594 16.4944 20.0681 14.7075 18.0469 14.7075C16.0238 14.7075 15.8531 16.9538 15.8063 18.4238V24.0225H12.0562V11.6888Z"
									fill="white"
								/>
							</svg>
						</Link>
						<Link to="https://github.com/vijita-u" target="_blank" rel="noopener noreferrer">
							<svg
								className="social__links"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5ZM0 15C0 6.71575 6.71575 0 15 0C23.2842 0 30 6.71575 30 15C30 23.2842 23.2842 30 15 30C6.71575 30 0 23.2842 0 15Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.9896 28.4196C11.8686 28.2635 11.8686 26.8731 11.9896 24.2486C10.6946 24.2933 9.8765 24.2034 9.53519 23.979C9.02312 23.6423 8.51056 22.604 8.05569 21.8723C7.60087 21.1405 6.59144 21.0248 6.18378 20.8613C5.77614 20.6976 5.6738 20.0308 7.30706 20.5351C8.94025 21.0394 9.01994 22.4128 9.53519 22.7339C10.0504 23.055 11.2822 22.9145 11.8405 22.6573C12.3989 22.4 12.3577 21.4422 12.4573 21.0628C12.5832 20.7086 12.1396 20.63 12.1298 20.6271C11.5847 20.6271 8.72119 20.0044 7.93469 17.2314C7.14812 14.4586 8.16131 12.6461 8.70181 11.867C9.06219 11.3476 9.03031 10.2406 8.60619 8.54588C10.1459 8.34913 11.3342 8.83375 12.1709 9.99988C12.1717 10.0066 13.2678 9.34806 15.0002 9.34806C16.7325 9.34806 17.3471 9.88444 17.8214 9.99988C18.2957 10.1153 18.675 7.95863 21.6042 8.54588C20.9927 9.74788 20.4806 11.2499 20.8714 11.867C21.2624 12.4841 22.7966 14.4465 21.8541 17.2314C21.2259 19.0881 19.9908 20.22 18.149 20.6271C17.9378 20.6945 17.8322 20.8033 17.8322 20.9533C17.8322 21.1783 18.1177 21.2029 18.5291 22.2571C18.8033 22.9599 18.8231 24.9673 18.5885 28.2792C17.9941 28.4305 17.5317 28.5321 17.2013 28.584C16.6154 28.6761 15.9793 28.7277 15.3543 28.7476C14.7293 28.7676 14.5122 28.7653 13.6481 28.6849C13.0721 28.6312 12.5192 28.5428 11.9896 28.4196Z"
									fill="white"
								/>
							</svg>
						</Link>
					</div>
				</Reveal>

				<div className="footer__nav">
					<Reveal>
						<HashLink to="#">
							<div className="nav__logo">Vu.</div>
						</HashLink>
					</Reveal>
					<nav className="footer__options">
						<Reveal>
							<HashLink to="#aboutme" smooth>
								<li className="footer__link">ABOUT ME</li>
							</HashLink>
						</Reveal>
						<Reveal>
							<HashLink to="#services" smooth>
								<li className="footer__link">SERVICES</li>
							</HashLink>
						</Reveal>
						<Reveal>
							<HashLink to="#projects" smooth>
								<li className="footer__link">PROJECTS</li>
							</HashLink>
						</Reveal>
						<Reveal>
							<HashLink to="#skills" smooth>
								<li className="footer__link">SKILLS</li>
							</HashLink>
						</Reveal>
						<Reveal>
							<HashLink to="#contact" smooth>
								<li className="footer__link">CONTACT</li>
							</HashLink>
						</Reveal>
					</nav>
					<div className="footer__copyright">Copyright &copy; vijitauday.com</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
