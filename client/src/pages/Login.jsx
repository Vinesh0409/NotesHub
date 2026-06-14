import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Illustration from "../components/Illustration";
import illus from "../assets/login illustration.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const Login = () => {
	const [ShowPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

    const onSubmit = (data)=>{
        console.log(data)
    }

	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<Header />

				<div className="flex items-centre justify-around px-6 py-10">
					<Illustration illus={illus} />

					<div className="w-full max-w-md bg-white p-6 shadow-lg rounded-2xl ring-1 ring-slate-200 ">
						<div className="text-center space-y-3">
							<h1 className="text-3xl font-semibold text-slate-900">
								Welcome Back👋
							</h1>
							<p className="text-slate-600">Login to your account</p>
						</div>

						<form className="mt-7 space-y-4">
							<div>
								<label
									htmlFor="email"
									className="mb-1 block text-slate-700 text-sm font-medium">
									Email Address
								</label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="Enter your email"
									className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Enter a valid email address",
										},
									})}
								/>
								{errors.email ? (
									<p className="mt-1 text-sm text-red-600">
										{errors.email.message}
									</p>
								) : null}
							</div>
							<div>
								<label
									htmlFor="password"
									className="mb-1 block text-slate-700 text-sm font-medium">
									Password
								</label>
								<div className="relative">
									<input
										type={ShowPassword ? "text" : "password"}
										name="password"
										id="password"
										placeholder="Enter your password"
										className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 6,
												message: "Password must be at least 6 characters",
											},
										})}
									/>
									<button
										type="button"
										onClick={() => setShowPassword((prev) => !prev)}
										className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md cursor-pointer px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900">
										{ShowPassword ? "Hide" : "View"}
									</button>
								</div>
								{errors.password ? (
									<p className="mt-1 text-sm text-red-600">
										{errors.password.message}
									</p>
								) : null}
							</div>
							<button
								type="submit"
                                onClick={handleSubmit()}
								className="w-full rounded-lg text-white bg-slate-900 py-3 cursor-pointer font-medium hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
								{isSubmitting ? "Logging..." : "Login"}
							</button>
						</form>
						<div className="text-center text-slate-600 pt-6 pb-3 text-[16px]">
							don't have an account?{" "}
							<Link to="/register">
								<span className="text-blue-700 italic font-medium px-1">
									register
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
