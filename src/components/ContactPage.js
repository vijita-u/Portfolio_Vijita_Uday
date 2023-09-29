import React, { useRef } from "react";
import "./ContactPage.scss";
import ContactInput from "../sub-components/ContactInput";
import Reveal from "../sub-components/Reveal";
import DownloadCV from "../sub-components/DownloadCV";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ContactPage() {
	const navigate = useNavigate();
	const form = useRef();
	const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY).then(
			(result) => {
				console.log(result);
				console.log("Message sent");
				e.target.reset();
				navigate("/message-confirmation", { replace: true });
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="contactPage" id="contact">
			<div className="cv_container">
				<DownloadCV />
			</div>
			<div className="contactPage__body">
				<div className="contactPage__details">
					<Reveal>
						<div className="contactPage__title">
							<div className="contactPage__header">
								<h2>
									Your <span className="lavender">Ideas</span>
								</h2>
								<div className="header__image">
									<svg
										className="comma"
										width="12"
										height="18"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.96501 6.01731C4.45862 6.45607 3.81994 6.71268 3.15076 6.74624C2.48158 6.7798 1.82042 6.58838 1.27268 6.20249C0.724942 5.8166 0.322148 5.25845 0.128508 4.61702C-0.0651333 3.97559 -0.0384747 3.2878 0.204234 2.66329C0.446942 2.03877 0.891729 1.51348 1.46769 1.17114C2.04366 0.828805 2.71765 0.689134 3.38222 0.774391C4.0468 0.859648 4.66371 1.16492 5.13461 1.64156C5.60551 2.1182 5.9033 2.73875 5.98051 3.40431C6.24751 4.76181 6.24451 6.37956 5.63251 7.82931C4.98601 9.35931 3.68175 10.6493 1.455 11.2321C1.3833 11.2516 1.30843 11.2567 1.23474 11.2471C1.16105 11.2375 1.08999 11.2134 1.02567 11.1761C0.961348 11.1389 0.905038 11.0893 0.859995 11.0302C0.814951 10.9711 0.782065 10.9037 0.763238 10.8318C0.744411 10.7599 0.740016 10.685 0.750306 10.6114C0.760596 10.5378 0.785368 10.467 0.82319 10.403C0.861012 10.339 0.911134 10.2832 0.970662 10.2387C1.03019 10.1942 1.09794 10.162 1.17001 10.1438C3.06826 9.64656 4.08901 8.59131 4.59601 7.39131C4.77886 6.95152 4.90293 6.48954 4.96501 6.01731Z"
											fill="black"
										/>
									</svg>
								</div>
							</div>
							<div className="contactPage__header">
								<h2>
									My <span className="yellow"> Inbox</span>
								</h2>
								<div className="header__image">
									<svg
										className="fullstop"
										width="20"
										height="20"
										viewBox="0 0 33 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.2641 24.3954C18.4208 24.3954 20.4892 23.5387 22.0143 22.0136C23.5393 20.4886 24.3961 18.4201 24.3961 16.2634C24.3961 14.1066 23.5393 12.0382 22.0143 10.5132C20.4892 8.98811 18.4208 8.13135 16.2641 8.13135C14.1073 8.13135 12.0389 8.98811 10.5138 10.5132C8.98879 12.0382 8.13202 14.1066 8.13202 16.2634C8.13202 18.4201 8.98879 20.4886 10.5138 22.0136C12.0389 23.5387 14.1073 24.3954 16.2641 24.3954Z"
											fill="#7B7CF1"
										/>
									</svg>
								</div>
							</div>
						</div>
					</Reveal>
					<form className="contactPage__inputs" ref={form} onSubmit={sendEmail}>
						<ContactInput
							tag={1}
							type="text"
							name="user_name"
							title="Your name"
							placeholder="Enter your name"
						/>
						<ContactInput
							tag={1} // 1 for input tag
							type="email"
							name="user_email"
							title="Your email"
							placeholder="Enter your email ID"
						/>
						<ContactInput
							tag={2} // 2 for textarea tag
							type="textarea"
							name="message"
							title="Your message"
							placeholder="Hey, I would like to discuss about xyz product. Let’s
get in touch as soon as possible!"
						/>
						<Reveal>
							<button type="submit" className="contactPage__submit">
								<span>Drop a line</span>
								<svg
									width="15"
									height="15"
									viewBox="0 0 21 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.16125 2.39939C8.17942 2.55889 8.22917 2.71513 8.30763 2.8591C8.38609 3.00307 8.49171 3.13192 8.61838 3.23821C8.74506 3.34451 8.89029 3.42614 9.0457 3.47841C9.2011 3.53068 9.36361 3.55254 9.52385 3.54275L15.758 3.18715L0.283214 21.6293C0.0822264 21.8689 -0.00943126 22.1834 0.0284049 22.5038C0.066241 22.8242 0.230472 23.1241 0.484968 23.3377C0.739465 23.5512 1.06338 23.6608 1.38546 23.6425C1.70753 23.6241 2.00139 23.4792 2.20237 23.2397L17.6696 4.80655L18.4 10.9907C18.3934 11.1655 18.4255 11.342 18.4942 11.5078C18.5628 11.6736 18.6663 11.8247 18.7973 11.9507C18.9284 12.0767 19.084 12.1745 19.2533 12.2373C19.4226 12.3002 19.6015 12.3265 19.7776 12.3146C19.9537 12.3027 20.1227 12.2527 20.273 12.1682C20.4233 12.0837 20.5511 11.9666 20.6477 11.8252C20.7443 11.6838 20.8074 11.5213 20.8324 11.3492C20.8574 11.1771 20.8439 10.9994 20.7927 10.8284L20.0018 4.13178C19.8878 3.17147 19.3953 2.27253 18.6324 1.63241C17.8696 0.992284 16.8987 0.663329 15.9332 0.717799L9.20099 1.1018C8.88107 1.12777 8.59213 1.27883 8.3973 1.52197C8.20247 1.76511 8.11761 2.08056 8.16125 2.39939Z"
										fill="#a5307a"
									/>
								</svg>
							</button>
						</Reveal>
					</form>
				</div>
				<div className="contactPage__background"></div>
			</div>
		</div>
	);
}

export default ContactPage;
