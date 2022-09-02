import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import logo from "../public/logo1.png";

const routes = [
	{
		title: "Home",
		slug: "/",
	},
	{
		title: "Banks",
		slug: "/banks",
		subRoutes: [
			{
				title: "Private Banks",
				slug: "/banks/private-banks",
			},
			{
				title: "Public Banks",
				slug: "/banks/public-banks",
			},
			{
				title: "Foreign Banks",
				slug: "/banks/foreign-banks",
			},
			{
				title: "Specialized Banks",
				slug: "/banks/specialized-banks",
			},
		],
	},
	{
		title: "Loans",
		slug: "/loans",
		subRoutes: [
			{
				title: "Business Loan",
				slug: "/loans/business-loan",
			},
			{
				title: "Education Loan",
				slug: "/loans/education-loan",
			},
			{
				title: "Home Loan",
				slug: "/loans/home-loan",
			},
		],
	},
	{
		title: "Cards",
		slug: "/cards",
		subRoutes: [
			{
				title: "Credit Card",
				slug: "/cards/credit-card",
			},
			{
				title: "Debit Card",
				slug: "/cards/debit-card",
			},
			{
				title: "Master Card",
				slug: "/cards/master-card",
			},
			{
				title: "VISA Card",
				slug: "/cards/visa-card",
			},
		],
	},
	{
		title: "Compare",
		slug: "/compare",
	},

	{
		title: "Log In",
		slug: "/login",
		color: "#00f040",
	},
	{
		title: "Register",
		slug: "register",
		color: "#00fff7",
	},
	{
		title: "About Us",
		slug: "/aboutus",
		color: "#00fff7",
	},
];

const Dropdown = ({ subRoutes, dropdown, depthLevel }) => {
	depthLevel += 1;

	return (
		<ul
			className={`absolute right-0 left-auto z-999 list-none bg-teal-800 w-64 pl-5 py-2 rounded-md shadow-lg shadow-teal-400/50 ${
				depthLevel > 1 ? "absolute left-full -top-1" : ""
			} ${dropdown ? "block" : "hidden"}`}
		>
			{subRoutes.map((subRoute) => (
				<MenuItems
					route={subRoute}
					key={subRoute.slug}
					depthLevel={depthLevel}
				/>
			))}
		</ul>
	);
};

const MenuItems = ({ route, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);

	const ref = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (dropdown && ref.current && !ref.current.contains(e.target)) {
				setDropdown(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};

	return (
		<li
			className="relative text-xl"
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{route.subRoutes ? (
				<React.Fragment>
					<button
						className="border-none bg-transparent cursor-pointer w-full px-1 py-2 flex items-center gap-1"
						type="button"
						onClick={() => setDropdown((prev) => !prev)}
					>
						<Link href={route.slug}>
							<a>{route.title}</a>
						</Link>
						<span className="text-sm text-cyan-300">
							{depthLevel > 0 ? <BiRightArrow /> : <BiDownArrow />}
						</span>
					</button>
					<Dropdown
						depthLevel={depthLevel}
						subRoutes={route.subRoutes}
						dropdown={dropdown}
					/>
				</React.Fragment>
			) : (
				<Link href={route.slug}>
					<a>{route.title}</a>
				</Link>
			)}
		</li>
	);
};

const Header = () => {
	return (
		<header className="w-full bg-cyan-900 text-white sticky top-0 z-[1000] shadow-xl shadow-cyan-300/50">
			<div className="container flex items-left w-full mx-auto py-2  justify-around">
				<div className="logo">
					<Link href="/">
						<a href="">
							<Image src={logo} alt="logo" height={65} width={400} />
						</a>
					</Link>
				</div>

				<nav>
					<ul className="flex list-none items-center gap-8">
						{routes.map((route) => {
							const depthLevel = 0;
							return (
								<MenuItems
									key={route.slug}
									route={route}
									depthLevel={depthLevel}
								/>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
