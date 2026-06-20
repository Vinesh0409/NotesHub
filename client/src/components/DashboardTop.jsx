import React from "react";
import logo from "../assets/logo.png";
import { IoLogOutOutline } from "react-icons/io5";


const decodeJWT = (token) => {
	if (!token) return null;
	try {
		const base64Url = token.split(".")[1];
		const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
		return JSON.parse(window.atob(base64));
	} catch (error) {
		return null;
	}
};

const DashboardTop = () => {
	const token = localStorage.getItem("token");
	const payload = decodeJWT(token);
	const id = payload?.userid || "default-user";
	const userName = localStorage.getItem("user") || "Vinesh";

	return (
		<div className="flex justify-between px-10 py-4">
			<img
				src={logo}
				alt="logo"
				className="block h-8 w-auto object-contain md:h-12"
			/>
			<div className="flex gap-12">
				<div className="flex items-center gap-3 rounded-l-full pr-2 bg-linear-to-r from-slate-50 to-slate-200">
					<img
						src={`https://api.dicebear.com/9.x/rings/svg?seed=${encodeURIComponent(id)}`}
						alt="user avatar"
						className="h-10 w-10 rounded-full shadow object-contain ring-0 ring-slate-400 block"
					/>
					<p className="font-medium text-slate-500">{userName}</p>
				</div>
				<div className="ring-1 ring-indigo-600 text-white  font-medium rounded-xl shadow bg-indigo-800 hover:bg-indigo-900">
					<button className="flex items-center gap-5 px-5 py-2.5 cursor-pointer ">
						<IoLogOutOutline className="text-2xl"/>
						<p>Logout</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DashboardTop;
