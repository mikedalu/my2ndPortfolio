import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { AppWrap, MotionWrap } from "../../../wrapper";
import { urlFor, client } from "../../../client";

// import { images } from "../../../constants";

// const abouts = [
// 	{ title: "Web Development", description: "I am a good web developer", imgUrl: images.about01 },
// 	{ title: "Web Design", description: "I have great eyes for aesthetically pleasing designs", imgUrl: images.about02 },
// 	{ title: "UI/UX", description: "I am a good UI/UX designer", imgUrl: images.about03 },
// 	{ title: "UI/UX", description: "I am a good UI/UX designer", imgUrl: images.about04 },
// ];

function About() {
	const [about, setAbout] = useState([]);
	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query)
			.then((data) => {
				setAbout(data);
			})
			.catch((err) => alert("oh shit this is not working"));
	}, []);
	return (
		<>
			<h2 className="head-text">
				I know that <span>Good Development</span>
				<br />
				means <span>Good Business</span>
			</h2>
			<div className="app__profiles">
				{about.map((about, index) => (
					<motion.div
						className="app__profile-item"
						key={about.title + index}
						whileInView={{ opacity: [0, 1] }}
						whileHover={{ scale: 1.2 }}
						transition={{ duration: 0.5, type: "tween" }}>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
}

///export default About; regular export,
// export AppWrap(About, "about") export with AppWrap..
//the App wrap contains all the navigation dots and social media icons postioned on each section
export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
////////the app__about class is declared in the About.scss file
