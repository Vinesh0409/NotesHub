import React from "react";
import Header from "../components/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Dropdown from "../components/Dropdown";

const CreateNote = () => {
    const subjects = ["All Subjects", "Hindi", "English", "Maths", "Science"]
	return (
		<div className="min-h-screen flex flex-col font-sans">
			<Header />
			<div className="container w-full mx-auto px-8 py-4 max-w-6xl flex-1 flex flex-col min-h-0 mb-6">
				<div className="top flex justify-between items-center">
					<h1 className="font-bold text-2xl">Create New Note</h1>
					<Link to="/dashboard">
						<div className="flex gap-2.5 text-slate-400 font-semibold items-center cursor-pointer hover:text-slate-500">
							<FaArrowLeftLong />
							<p className="text-[18px]">Back</p>
						</div>
					</Link>
				</div>
				<form className="mt-7 space-y-4">
					<div>
						<label
							htmlFor="title"
							className="mb-2 block text-slate-700 font-semibold">
							Title
						</label>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Enter note title"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 font-medium text-slate-600 outline-none transition focus:border-slate-500"
						/>
					</div>
                    <div className="w-1/3">
                        <label
							htmlFor="subject"
							className="mb-2 block text-slate-700 font-semibold">
							Subject
						</label>
                        <Dropdown options={subjects} placeholder="Select Subject"/>
                    </div>
                    <div>
                       
                    </div>
				</form>
			</div>
		</div>
	);
};

export default CreateNote;
