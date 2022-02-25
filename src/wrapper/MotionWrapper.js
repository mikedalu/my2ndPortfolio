import React from "react";
import { motion } from "framer-motion";

function MotionWrap(Component, classNames) {
	return function HOC() {
		return (
			<motion.div
				animate={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ durationi: 0.5 }}
				className={`${classNames} app__flex    `}>
				<Component />
			</motion.div>
		);
	};
}

export default MotionWrap;

//This compoents is a higher order compoents
//it wraps over the order compoents to add just   animation to each section and  to give different background colors
//It is imported by the Headr Skill, About section and wraps at the export region
