import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../../wrapper";
import { urlFor, client } from "../../../client";
import "./Footer.scss";
// import { BsImages } from "react-icons/bs";
import { images } from "../../../constants";

function Footer() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	//destructure data
	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = () => {
		setLoading(true);
		const contact = {
			_type: "contact",
			name: name,
			message: message,
			email: email,
		};
		client.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(`form not submitted: ${err}`));
	};

	return (
		<>
			<h2 className="head-text">Feel free to book a chat</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt={email} />
					<a href="mailto:simdimike123@gmail.com" className="p-text">
						simdimike123@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt={`mobile`} />{" "}
					<a href="tel: +2348163427469" className="p-text">
						+2348163427469
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text"
							name="name"
							type="text"
							placeholder="Your Name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							name="email"
							type="email"
							placeholder="Your Email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your message"
							name="message"
							value={message}
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? "Sending" : "Send message"}
					</button>
				</div>
			) : (
				<div>
					<h2 className="head-text">Thank you for getting in touch</h2>
				</div>
			)}
		</>
	);
}

export default AppWrap(MotionWrap(Footer, "app__footer "), "contact", "app__whitebg");
