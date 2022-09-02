import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const MenuItem = ({ route }) => {
	const [dropdown, setDropdown] = useState(false);

	console.log(route);
	return (
		<div
			className="dropdown relative"
			onMouseEnter={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
		>
			<div
				className={`text-lg font-bold flex items-center justify-center gap-1  cursor-pointer`}
			>
				{route.title} <BiCaretDown />
			</div>
			{dropdown && (
				<div
					className={`dropdown-menu clicked w-64 absolute top-10 flex flex-col items-start bg-green-900 pl-5 py-2 gap-2 `}
				>
					{route.subRoutes.map((subRoute, index) => (
						<Link href={subRoute.slug} key={index}>
							<a className="cName" onClick={() => setDropdown(false)}>
								{subRoute.title}
							</a>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default MenuItem;
