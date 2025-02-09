import React from "react";
import { FaAngleRight, FaCheck, FaXmark } from "react-icons/fa6";

const MainContent = () => {
	return (
		<>
			<div className="flex px-24 py-2">
				<div className="w-1/2">
					<div className="text-5xl text-white py-8 font-semibold">
						Subscribe now and start streaming
					</div>
				</div>
				<div className="w-1/2">
					<div className="w-full flex text-white gap-4">
						<div>
							<div className="h-16"></div>
							<div className="h-16 flex flex-col items-start">
								<div>All Content</div>
								<div className="text-gray-500">
									Movies, Live Sports, TV, Specials
								</div>
							</div>
							<div className="h-16 flex flex-col items-start">
								<div>Watch On TV and Laptop</div>
							</div>
							<div className="h-16 flex flex-col items-start">
								<div>Watch On TV and Laptop</div>
							</div>
							<div className="h-16 flex flex-col items-start">
								<div>Watch On TV and Laptop</div>
							</div>
							<div className="h-16 flex flex-wrap flex-col items-start">
								<div>Watch On TV and Laptoap Watch On TV and Laptoap</div>
							</div>
							<div className="h-16 flex flex-col items-start">
								<div>All Content</div>
								<div className="text-gray-500">
									Movies, Live Sports, TV, Specials
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-b from-gray-600 to-gray-800">
							<div className="text-amber-400 text-lg h-16 flex justify-center items-center">
								<div>Super</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaXmark />
							</div>
							<div className="h-16 flex justify-center items-center">2</div>
							<div className="h-16 flex flex-col justify-center items-center">
								<div>Full HD</div>
								<div>1080p</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								Dolby Atmos
							</div>
						</div>
						<div>
							<div className="flex flex-col text-amber-400 text-lg h-16 justify-center items-center">
								<div>Super</div>
								<div>+Ads free</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">2</div>
							<div className="h-16 flex flex-col justify-center items-center">
								<div>Full HD</div>
								<div>1080p</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								Dolby Atmos
							</div>
						</div>
						<div>
							<div className="flex flex-col text-amber-400 text-lg h-16 justify-center items-center">
								<div>Premium</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">
								<FaCheck />
							</div>
							<div className="h-16 flex justify-center items-center">4</div>
							<div className="h-16 flex flex-col justify-center items-center">
								<div>4K 2160p</div>
								<div>+ Dolby Vision</div>
							</div>
							<div className="h-16 flex justify-center items-center">
								Dolby Atmos
							</div>
						</div>
					</div>
					<div className="w-full flex flex-col gap-2">
						<div className="flex items-center justify-center">
							<div className="flex w-96 gap-4 bg-gray-600 px-4 py-1 rounded-full text-gray-400">
								<div className="flex flex-1 gap-2 justify-center items-center">
									<span className="text-xl text-gray-200">Quarterly</span>
									<FaCheck className="text-white w-6 h-6 p-1 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 rounded-full" />
								</div>
								<div className="flex flex-1 gap-2 justify-center items-center">
									<span className="text-xl">Monthly</span>
								</div>
								<div className="flex flex-1 gap-2 justify-center items-center">
									<span className="text-xl">Yearly</span>
								</div>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="relative flex-1 border-2 border-white text-white p-4 rounded-lg bg-gray-800">
								<div className="text-amber-400 text-xl font-semibold">
									Super
								</div>
								<div>
									<span className="text-xs">&#8377; </span>
									<span className="text-2xl font-bold">299</span>
									<span className="text-sm">/3Months</span>
								</div>
								<div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 rounded-full border-4 border-gray-800">
									<FaCheck className="w-8 h-8 p-2" />
								</div>
							</div>
							<div className="flex-1 flex items-center border-2 border-gray-500 text-gray-500 p-4 rounded-lg bg-gray-800">
								<div className="text-xl font-semibold">Super</div>
							</div>
							<div className="flex-1 border-2 border-white text-white p-4 rounded-lg bg-gray-800">
								<div className="text-amber-400 text-xl font-semibold">
									Premium
								</div>
								<div>
									<span className="text-xs">&#8377; </span>
									<span className="text-2xl font-bold">499</span>
									<span className="text-sm">/3Months</span>
								</div>
							</div>
						</div>
						<button className="flex gap-2 justify-center items-center text-white bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 px-8 text-xl font-semibold py-4 rounded-lg">
							<span>Continue with Super</span>
							<FaAngleRight />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainContent;
