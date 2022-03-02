import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.myLogo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li className="app__flex p-text" key={`list-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-mobile-menu">
				{
					//if toggle is true
					toggle && (
						<motion.div whileInView={{ x: [600, 0] }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{["home", "about", "work", "skills", "contact"].map((item) => (
									<li className="app__flex p-text" key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)
				}
				<HiMenuAlt4 onClick={() => setToggle(true)} />
			</div>
		</nav>
	);
}

export default Navbar;
