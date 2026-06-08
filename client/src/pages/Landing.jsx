import React from "react";
import logo from "../assets/logo.png";
import illus from "../assets/landing page illustration.png";
import { Link } from "react-router";
const Landing = () => {
	return (
		<div className="min-h-screen flex flex-col font-sans">
			<div className="header flex items-center justify-between px-10 py-4">
				<div>
					<img
						src={logo}
						alt="logo"
						className="block h-8 w-auto object-contain md:h-12"
					/>
				</div>

				<div className="flex gap-4">
					<Link to="/login">
						<div className="px-7 py-3.5 rounded-xl shadow bg-white border-slate-100 text-[16px] font-semibold font-sans cursor-pointer">
							<button className=" text-indigo-800 cursor-pointer ">
								Login
							</button>
						</div>
					</Link>

					<Link to="/register">
						<div className="px-7 py-3.5 rounded-xl shadow bg-indigo-800 text-[16px] font-semibold font-sans cursor-pointer">
							<button className=" text-white  cursor-pointer">
								Get Started
							</button>
						</div>
					</Link>
				</div>
			</div>

			<div className="hero flex items-center px-4 py-6 md:py-20 lg:py-28">
				<div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-center gap-6 lg:gap-8">
					<div className="content w-full md:w-1/2 max-w-md px-2 space-y-8">
						<h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
							Organize Your Study Notes Effortlessly
						</h1>
						<p className="mt-4 text-base text-slate-600 md:text-lg">
							A simple and powerful notes manager built for students to
							organize, study and succeed.
						</p>
						<div className="mt-6 flex gap-4">
							<Link to="/register">
								<button className="rounded-xl bg-indigo-800 px-5 py-2 text-xl font-semibold text-white cursor-pointer">
									Get Started
								</button>
							</Link>

							<button className="rounded-xl border border-slate-200 px-5 py-2 text-xl text-slate-800 cursor-pointer">
								Learn More
							</button>
						</div>
					</div>

					<div className="w-full md:w-1/2 flex justify-center md:justify-end">
						<img
							src={illus}
							alt="illustration"
							className="w-full md:max-w-xl lg:max-w-2xl object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
