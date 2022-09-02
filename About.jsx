import Image from "next/image";
import React from "react";
import aboutDemo from "../public/images/about-demoo.png";

const About = () => {
	return (
		<div className="w-full py-20 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<h4 className="text-5xl font-bold font-sans text-center text-white">
				<span>About</span>
				<span className="text-5xl text-green-500">Us</span>
			</h4>
			<div className="container mx-auto  flex items-center ">
				<div className="w-1/2">
					<p className="text-lg font-sans text-white font-bold">
						{" "}
						BankPediaBD has no physical existence for banking services and is
						not affiliated with any banks, insurance, mortgage brokers or any
						other financial companies.Our intention is to help people by giving
						the right information.This website publishes various bank service
						information for the help of people and never publish any illegal
						financial documents from any bank.
					</p>
				</div>
				<div className="w-1/2">
					<Image src={aboutDemo} alt="About" />
				</div>
			</div>
		</div>
	);
};

export default About;
