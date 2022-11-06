import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../../constants";
import { AppWrap } from "../../../wrapper";

const scaleVariants = {
	animate: { scale: [0, 1], opacity: [0, 1], transition: { duration: 1, ease: "easeInOut" } },
};

function Header() {
	return (
		<div id="home" className="app__header app__flex">
			<motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__header-info">
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text ">Micheal</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<h2 className="head-text">Fullstack Developer</h2>
					</div>
				</div>
			</motion.div>
			<motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__header-img">
				<img src={images.profile} alt="profile" />
				<motion.img
					className="overlay-circle"
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile-circle"
				/>
			</motion.div>
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.animate}
				transition={{ duration: 0, delayChildren: 0.5 }}
				className="app__header-circles">
				{[images.javascript, images.react, images.sass].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="cirlce" />
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default AppWrap(Header, "home");
