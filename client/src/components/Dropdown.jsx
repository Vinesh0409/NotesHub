import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";

const Dropdown = ({ options,sort }) => {
	const [sortOpen, setOpen] = useState(false);
	const [Selected, setSelected] = useState(options[0]);
	const ref = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={ref}>
			<button
				type="button"
				onClick={() => {
					setOpen(!sortOpen);
				}}
				className="flex items-center gap-5 pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-400 outline-none cursor-pointer transition hover:border-slate-300 focus:ring-1 focus:ring-slate-300 min-w-35 justify-between">
				<span>{sort?"Sort: ":""}{Selected}</span>
				<IoChevronDown
					className={`absolute right-3 text-slate-500 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
				/>
			</button>
			{sortOpen && (
				<div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-100 bg-white shadow-lg z-10 overflow-hidden py-1">
					{options.map((option) => (
						<button
							key={option}
							type="button"
							onClick={() => {
								setSelected(option);
								setOpen(false);
							}}
							className="w-full px-4 py-2.5 text-left  text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer">
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
