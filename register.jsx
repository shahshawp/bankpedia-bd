import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";

const Register = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		role: "Choose",
		accountStatus: "normal",
		successMgs: "",
	});

	const handleSubmit = async () => {
		await fetch("http://localhost:4000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("success", data);
				setUserData({ ...userData, successMgs: data.message });
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<section className="w-full p-5 bg-emerald-900">
			<div className="w-full max-w-xs m-auto bg-indigo-100 rounded px-5 py-6">
				<h2>{userData.successMgs}</h2>
				<header>
					<h2 className="text-3xl text-indigo-900 text-center py-4 font-bold">
						Sign up
					</h2>
				</header>
				<form>
					<div>
						<label
							className="block mb-1 font-bold text-indigo-500"
							htmlFor="username"
						>
							User Name
						</label>
						<input
							id="name"
							className="w-full p-2 mb-4 text-indigo-700 font-bold border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
							type="text"
							name="username"
							onChange={(e) =>
								setUserData({ ...userData, name: e.target.value })
							}
						/>
					</div>
					<div>
						<label
							className="block mb-1  text-indigo-500 font-bold"
							htmlFor="email"
						>
							Email
						</label>
						<input
							id="email"
							className="w-full p-2 mb-4 text-indigo-700 font-bold border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
							type="email"
							name="email"
							onChange={(e) =>
								setUserData({ ...userData, email: e.target.value })
							}
						/>
					</div>
					<div>
						<label
							className="block mb-1 font-bold text-indigo-500"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="w-full p-2 mb-4  text-indigo-700 font-bold border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
							type="password"
							name="password"
							onChange={(e) =>
								setUserData({ ...userData, password: e.target.value })
							}
						/>
					</div>
					<div>
						<label
							className="block mb-1 font-bold text-indigo-500 "
							htmlFor="role"
						>
							Role
						</label>
						<select
							className="w-full p-2 mb-4 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 "
							onChange={(e) =>
								setUserData({ ...userData, role: e.target.value })
							}
						>
							<option value="choose" className="font-bold">
								Choose
							</option>
							<option value="User">User</option>
							<option value="Agent">Agent</option>
							<option value="Admin">Admin</option>
						</select>
					</div>
					<div>
						<input
							onClick={() => handleSubmit()}
							className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded"
							type="button"
							value="Submit"
						/>
						<footer>
							<a
								className="text-indigo-700 font-bold hover:text-pink-700 text-sm float-left"
								href="#"
							>
								Forgot Password?
							</a>
							<a
								className="text-indigo-700 font-bold hover:text-pink-700 text-sm float-right"
								href="#"
							>
								Create Account
							</a>
						</footer>
					</div>
				</form>
			</div>
			<Footer />
		</section>
	);
};

export default Register;
