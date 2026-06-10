import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import illus from "../assets/register illustration.png";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data) => {
		try {
			await axios.post("http://localhost:5000/api/auth/register/", data);
			navigate("/dashboard", { replace: true });
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<div className="min-h-screen flex flex-col font-sans">
			<div>
				<div className="px-10 py-4">
					<img
						src={logo}
						alt="logo"
						className="block h-8 w-auto object-contain md:h-12"
					/>
				</div>

				<div className="main flex items-center justify-around gap-10 px-6 py-10">
					<img
						src={illus}
						alt="illustration"
						className="hidden max-w-md lg:block"
					/>

					<div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
						<div className="space-y-3 text-center">
							<h1 className="text-3xl font-semibold text-slate-900">
								Create your Account🚀
							</h1>
							<p className="text-slate-600">Join thousands of students</p>
						</div>

						<form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label
									className="mb-1 block text-sm font-medium text-slate-700"
									htmlFor="name">
									Full name
								</label>
								<input
									id="name"
									type="text"
									placeholder="Enter name..."
									className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
									{...register("name", {
										required: "Name is required",
										minLength: {
											value: 2,
											message: "Name must be at least 2 characters",
										},
									})}
								/>
								{errors.name ? (
									<p className="mt-1 text-sm text-red-600">
										{errors.name.message}
									</p>
								) : null}
							</div>

							<div>
								<label
									className="mb-1 block text-sm font-medium text-slate-700"
									htmlFor="email">
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="you@example.com"
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
									className="mb-1 block text-sm font-medium text-slate-700"
									htmlFor="password">
									Password
								</label>
								<div className="relative">
									<input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Create a password"
										className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-20 outline-none transition focus:border-slate-900"
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
										className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900">
										{showPassword ? "Hide" : "View"}
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
								disabled={isSubmitting}
								className="w-full rounded-lg bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70">
								{isSubmitting ? "Creating account..." : "Create account"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
