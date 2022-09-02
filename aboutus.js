import Image from "next/image";
import React from "react";
import aboutDemo from "../public/images/about1.png";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div className="w-full py-5 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<h4 className="text-5xl font-bold font-sans text-center text-white">
				<span>About</span>
				<span className="text-5xl text-green-500">Us</span>
			</h4>
			<div className="container mx-auto flex items-center ">
				<div className="w-1/2">
					<ul className="text-lg font-sans text-white font-bold">
						<li>
							<em>
								* This website is created mainly for educational and
								non-commercial use only. It is a partial completion of final
								year project offered in Green University of Bangladesh.
							</em>
						</li>
						<li>
							<em>* We do not represent the business entity.</em>
						</li>
						<li>
							<em>
								* The content of the pages of this website might be inaccurate,
								thus, we do not take any responsibility for incorrect
								information.
							</em>
						</li>
						<li>
							<em>
								* If you believe that information of any kind on this website is
								an infringement of copyright in material in which you either own
								copyright or are authorized to exercise the rights of a
								copyright owner, kindly, <br></br>contact us for removal.:{" "}
								<br></br>
								<a href="mailto:101209112students.swinburne.edu.my">
									* 101209112@students.swinburne.edu.my
								</a>
								<br></br>{" "}
								<a href="prioprio34@gmail.com">* prioprio34@gmail.com</a>
							</em>
						</li>
					</ul>
				</div>
				<div className="w-1/2">
					<Image src={aboutDemo} alt="About" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
