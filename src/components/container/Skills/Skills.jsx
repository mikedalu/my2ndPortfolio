import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../../wrapper";
import { urlFor, client } from "../../../client";

import "./Skills.scss";

function Skills() {
	const [skills, setSkills] = useState([]); //skills state
	const [experiences, setExperiences] = useState([]); //experience state

	useEffect(() => {
		const expQuery = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';
		client
			.fetch(skillsQuery)
			.then((data) => {
				setSkills(data);
			})
			.catch((err) => console.log(`Error from fetching data in Skills component: ${err}`));

		client
			.fetch(expQuery)
			.then((data) => {
				setExperiences(data);
			})
			.catch((err) => console.log(`Error fetching Experience data: ${err}`));
	}, []);
	return (
		<>
			<h2 className="head-text">Skills</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill, index) => (
						<motion.div
							className="app__skills-item app__flex"
							whileInView={{ opacity: [0, 1] }}
							transition={{ durationi: 0.5 }}
							key={index}>
							<div className="app__flex" style={{ backgroundColor: "#bdf7b33b " }}>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					{experiences.work
						? experiences.works.map((work) => (
								<>
									<motion.div
										className="app__skills-exp-work app__flex"
										whileInView={{ opacity: [0, 1] }}
										transition={{ durationi: 0.5 }}
										key={work.name}
										data-tip
										data-for={work.name}>
										<h4 className="bold-text">{work.name}</h4>
										<p className="p-text">{work.compnay}</p>
									</motion.div>

									<ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip">
										{work.desc}
									</ReactTooltip>
								</>
						  ))
						: ""}
				</motion.div>
			</div>
		</>
	);
}

// export default Skills;  regular export
// export default AppWrap(Skills, "skills");  export without Motion wrap
//the App wrap contains all the navigation dots and social media icons postioned on each section

export default AppWrap(MotionWrap(Skills, "app__skills app__flex "), "skills", "app__whitebg");
//the app__skills class is declared in the Skills.scss file
