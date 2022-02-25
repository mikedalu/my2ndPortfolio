import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component, idName, classNames) => {
	return function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
					<div className="copyright">
						<p className="p-text">@2022 Micheal &copy;</p>
						<p className="p-text">All rights reserved</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};
};

export default AppWrap;

//this is a HOD higher order function that wraps each section to display the navigaton dots, social media icons and copy right text
//taking 3 props of
//1 Component,
//2 idName to mark as active,
//3  classNames to input the background color of the section