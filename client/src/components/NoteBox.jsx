import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const NoteBox = ({data}) => {
	return (
		<div className="card flex justify-between items-center hover:shadow p-6 transition rounded-sm hover:ring-1 hover:ring-slate-400">
			<div className="flex justify-center gap-4 cursor-pointer">
				<img
					src={`https://api.dicebear.com/9.x/shapes/svg?seed==hindi}`}
					alt=""
					className="h-full w-12 block"
				/>
				<div className="">
					<h1 className="font-semibold text-xl">{data.title}</h1>
					<h2 className="text-slate-400 font-medium">{data.subject}</h2>
				</div>
			</div>
			<div className="flex items-center gap-10">
				<p className="font-medium text-slate-400">{data.time}</p>
				<div className="flex items-center gap-3 text-slate-800">
					<FaRegEdit className="text-3xl font-medium cursor-pointer" />
					<MdOutlineDelete className="text-3xl font-medium cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default NoteBox;
