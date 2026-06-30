import React, { useState, useEffect, useRef } from "react";
import DashboardTop from "../components/DashboardTop";
import { FaPlus } from "react-icons/fa6";
import { IoSearch, IoClose, IoChevronDown } from "react-icons/io5";
import Dropdown from "../components/Dropdown";
import NoteBox from "../components/NoteBox";
import { Link } from "react-router";

const Dashboard = () => {
	const subjects = ["All Subjects", "Hindi", "English", "Maths", "Science"];
	const sortOptions = ["Latest", "Oldest"];
	const subject = "maths";

	return (
		<div className="min-h-screen flex flex-col font-sans bg-slate-50/30">
			<DashboardTop />

			<div className="container w-full mx-auto px-8 py-4 max-w-6xl flex-1 flex flex-col min-h-0 mb-6">
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-2xl">All Notes</h1>
					<div className="ring-1 ring-indigo-600 text-white  font-medium rounded-xl shadow bg-indigo-800 hover:bg-indigo-900">
						<Link to="/createNote">
							<button className="flex items-center gap-5 px-5 py-2.5 cursor-pointer ">
								<FaPlus />
								<p>New Note</p>
							</button>
						</Link>
					</div>
				</div>

				<div className="shadow mt-4 rounded-xl ring-1 ring-slate-100 flex-1 flex flex-col min-h-0 bg-white">
					<div className="top ">
						<form className="flex justify-between items-center">
							<div className="relative flex items-center w-1/3">
								<IoSearch className="absolute left-3 text-slate-400 text-lg" />
								<input
									type="search"
									placeholder="Search notes..."
									className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-200 text-slate-800 outline-none transition focus:border-slate-300 focus:ring-1 focus:ring-slate-300"
								/>
								<button
									type="button"
									className="absolute right-3 text-slate-400 hover:text-slate-600 cursor-pointer ">
									<IoClose className="text-lg" />
								</button>
							</div>
							<div className="flex gap-12">
								<Dropdown options={subjects} sort={false} />
								<Dropdown options={sortOptions} sort={true} />
							</div>
						</form>
					</div>

					<div className="py-10 px-10 space-y-0.5">
						<NoteBox
							data={{
								title: "Binary Tree",
								subject: "Data Structures",
								time: "2 days ago",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
