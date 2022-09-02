import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { MdLocalAtm, MdOutlineDoubleArrow } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({ bank }) => {
	return (
		<div className="border-2 border-cyan-800 rounded-lg p-5 shadow-lg shadow-cyan-700/50 ">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<h2 className="text-4xl font-bold text-cyan-700">{bank.title}</h2>
					<h4 className="text-2xl text-slate-600">{bank.details.type}</h4>
				</div>
				<div className="">
					<Image
						src={bank.details.logo.src}
						height={bank.details.logo.height}
						width={bank.details.logo.width}
						alt="Bank Logo"
					/>
				</div>
			</div>
			<p className="py-2 text-lg text-gray-800">
				{bank.about.substring(0, 180)}...
			</p>
			<ul className="flex items-center justify-between py-3">
				<li className="flex items-center justify-center bg-gradient-to-br from-teal-900 to-rose-800 rounded-md px-5 py-2">
					<BiBuildingHouse className="text-5xl text-yellow-500" />
					<span className="text-2xl font-bold text-teal-500">
						Branches:
					</span>{" "}
					<span className="pl-3 text-3xl font-bold text-teal-400">
						{bank.branches.length}
					</span>
				</li>
				<li className="flex items-center justify-center bg-gradient-to-br from-teal-900 to-rose-800 rounded-md px-5 py-2">
					<MdLocalAtm className="text-5xl text-yellow-500" />
					<span className="text-2xl font-bold text-teal-500">ATMs:</span>{" "}
					<span className="pl-3 text-3xl font-bold text-teal-400">
						{bank.atms.length}
					</span>
				</li>
				<li className="flex items-center justify-center bg-gradient-to-br from-teal-900 to-rose-800 rounded-md px-5 py-2">
					<GiReceiveMoney className="text-5xl text-yellow-500" />
					<span className="text-2xl font-bold text-teal-500">
						Services:
					</span>{" "}
					<span className="pl-3 text-3xl font-bold text-teal-400">
						{bank.services.length}
					</span>
				</li>
			</ul>
			<div className="flex items-center justify-center pt-5">
				<Link href={bank.title.toLocaleLowerCase().split(" ").join("-")}>
					<a className="text-2xl font-bold flex items-center justify-center gap-3">
						<span className="text-purple-600">See Details</span>
						<MdOutlineDoubleArrow className="animate-ping text-rose-400" />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default BankCard;
