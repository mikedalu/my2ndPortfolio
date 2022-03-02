import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/Micheal07713791">
					<BsTwitter />
				</a>
			</div>
			<div>
				<a href="https://github.com/mikedalu">
					<BsGithub />
				</a>
			</div>
			<div>
				<a href="https://www.facebook.com/michael.dalu/">
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
