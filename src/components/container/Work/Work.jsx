import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../../wrapper";
import { urlFor, client } from "../../../client";
import "./Work.scss";

function Work() {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = '*[_type == "works"]';
		client.fetch(query)
			.then((data) => {
				setWorks(data);
				setFilterWork(data);
			})
			.catch((err) => console.log(err));
	}, []);
	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		//setTimeout to trigger the animation again
		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			//conditioin to filter the works by tags(category)
			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	return (
		<>
			<h2 className="head-text absolute ">
				My creative <span>Portfolio</span>
			</h2>
			<div className="app__work-filter">
				{["All", "Web App", "React.js"].map((item, index) => (
					<div
						className={`app__work-filter-item  app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
						key={index}
						onClick={() => handleWorkFilter(item)}>
						{item}
					</div>
				))}
			</div>

			<motion.div className="app__work-portfolio" animate={animateCard} transition={{ duration: 0.3, delayChildren: 0.3 }}>
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
							<motion.div
								className="app__work-hover app__flex"
								whileHover={{ opacity: [0, 1] }}
								transition={{ duration: 0.24, ease: "easeInOut", staggerChildren: 0.5 }}>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										className="app__flex"
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.24,
											ease: "easeInOut",
											staggerChildren: 0.5,
										}}>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										className="app__flex"
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.24,
											ease: "easeInOut",
											staggerChildren: 0.5,
										}}>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>
						<div className="app_work-content app_flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>
							<div className="external-links app__flex">
								<a href={work.projectLink}>visit website</a>
								<a href={work.codeLink}>view on github</a>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
}

///the App wrap contains all the navigation dots and social media icons postioned on each section

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");

/////the app__work class is declared in the Work.scss file
