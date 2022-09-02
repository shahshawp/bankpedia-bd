import Image from "next/image";
import React from "react";

import priodemo from "../public/images/prio.png";
import rimademo from "../public/images/rima.jpeg";
import suptodemo from "../public/images/supto.jpg";
const Footer = () => {
	return (
		<div className="w-full py-10 bg-gradient-to-t from-black via-gray-700 to-gray-700 flex flex-col space-y-4 ">
			<h4 className="text-5xl font-bold font-sans  text-center text-white">
				<span>Developer</span>{" "}
				<span className="text-5xl text-green-500">Information</span>
			</h4>
			<div className="container mx-auto flex flex space-x-4  items-center ">
				<div className="w-1/2">
					<p className="text-lg font-sans text-white font-bold text-center">
						<a href="mailto:101209112@students.swinburne.edu.my">
							Contact Us: MD Shahrior Shawon Prio<br></br>CEO & Team Leader
						</a>
						<br></br>
						<a>Call Us: +8801755767186</a>
					</p>
				</div>

				<div className="w-1/0 container mx-auto flex flex space-x-4  items-center">
					<Image src={priodemo} alt="prio" />
					<p className="text-lg font-sans text-white font-bold">
						Founder & CEO
					</p>
					<Image src={suptodemo} alt="supto" />
					<p className="text-lg font-sans text-white font-bold">
						Co-Founder & CTO
					</p>
					<Image src={rimademo} alt="rima" />
					<p className="text-lg font-sans text-white font-bold">
						Co-Founder & Project Manager
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
