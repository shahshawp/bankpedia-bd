import React from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async () => {
		await axios
			.post("http://localhost:4000/api/auth/login", loginData)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error.response.data));
	};

	return (
		<section className="w-full p-5 bg-emerald-900">
			<div className="w-full max-w-xs m-auto bg-indigo-100 rounded py-6 px-5">
				<header>
					<h2 className="text-5xl text-indigo-900 text-center py-5 font-bold">
						Login
					</h2>
				</header>
				<form>
					<div>
						<label
							className="block mb-2 font-bold text-indigo-500"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
							type="email"
							name="email"
							onChange={(e) =>
								setLoginData({ ...loginData, email: e.target.value })
							}
						/>
					</div>
					<div>
						<label
							className="block mb-2 font-bold text-indigo-500"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
							type="password"
							name="password"
							onChange={(e) =>
								setLoginData({ ...loginData, password: e.target.value })
							}
						/>
					</div>
					<div>
						<input
							className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
							type="button"
							value="Submit"
							onClick={() => handleSubmit()}
							onClick={() => (window.location.href = "http://localhost:3000/")}
						/>
					</div>
				</form>
				<footer>
					<a
						className="text-indigo-700 font-bold hover:text-pink-700 text-sm float-left"
						href="#"
					>
						Forgot Password?
					</a>
					<a
						className="text-indigo-700 font-bold hover:text-pink-700 text-sm float-right"
						href="http://localhost:3000/register"
					>
						Create Account
					</a>
				</footer>
			</div>
			<Footer />
		</section>
	);
};

export default Login;
