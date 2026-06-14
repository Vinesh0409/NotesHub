import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<div className="px-10 py-4">
			<img
				src={logo}
				alt="logo"
				className="block h-8 w-auto object-contain md:h-12"
			/>
		</div>
	);
};

export default Header;
