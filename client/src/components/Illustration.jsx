import React from "react";

const Illustration = ({ illus }) => {
	return (
		<div className="hidden w-full max-w-md lg:block shrink-0">
			<img
				src={illus}
				alt="illustration"
				className="w-full h-125 object-contain"
			/>
		</div>
	);
};

export default Illustration;
