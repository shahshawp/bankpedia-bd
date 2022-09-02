import Image from "next/image";
import React from "react";

import services from "../public/images/service.png";
const Services = () => {
	return (
		<div className="w-full py-20 px-20 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<div className="container mx-auto flex items-center justify-center">
				{slideItems.map((item) => (
					<Slider key={item.title} item={item} />
				))}
			</div>
		</div>
	);
};

export default Services;
const Slider = ({ item }) => {
	const { subtitle, title, description } = item;
	return (
		<div className="w-full flex items-center justify-between">
			<div className="w-7/12 flex flex-col gap-4">
				<h4 className="text-5xl font-bold">
					<span className="tracking-wider text-white font-sans">Our</span>
					<span className="text-5xl text-green-500">Services</span>
					{subtitle}
				</h4>
				<h2 className="text-4xl font-bold text-">{title}</h2>
				<p className="text-lg font-bold font-sans text-white">{description}</p>
			</div>
			<div className="w-5/12">
				<Image src={services} alt="services" />
			</div>
		</div>
	);
};
const slideItems = [
	{
		subtitle: "",
		title: "Choose The Suitable Bank ",
		description:
			"Banking industry in Bangladesh started its journey with 6 Nationalized commercialized banks, 2 State owned Specialized banks and 3 Foreign Banks after achieving the independence in 1971. In the 1980’s banking industry achieved significant expansion with the entrance of private banks in Bangladesh. Now, banks in Bangladesh are primarily of two types which are scheduled and non-scheduled.",
	},
];
