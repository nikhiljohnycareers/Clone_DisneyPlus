import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa6";

const data = [
	{
		id: 1,
		title: "English",
	},
	{
		id: 2,
		title: "Hindi",
	},
	{
		id: 3,
		title: "Tamil",
	},
	{
		id: 4,
		title: "Telugu",
	},
];

const LanguageDropdown = () => {
	const [toggle, setToggle] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("English");

	return (
		<>
			<div className="relative">
				<div
					className="w-36 rounded-lg border-2 border-white bg-gray-700 text-white"
					onClick={() => setToggle(true)}
				>
					<div className="flex items-center justify-center gap-2 p-2 cursor-pointer">
						<span className="text-lg font-semibold">{selectedLanguage}</span>
						<span>
							<FaAngleDown />
						</span>
					</div>
				</div>
				{toggle && (
					<div className="absolute top-0 left-0 w-36 rounded-lg border-2 border-white bg-gray-800 text-white">
						<div
							className="flex items-center justify-center gap-2 p-2 cursor-pointer"
							onClick={() => setToggle(false)}
						>
							<span className="text-lg font-semibold">{selectedLanguage}</span>
							<span>
								<FaAngleUp />
							</span>
						</div>
						<ul>
							{data.map((lang) => (
								<li
									key={lang.id}
									className="flex justify-center items-center w-full p-2"
									onClick={() => setSelectedLanguage(lang.title)}
								>
									<span className="w-1/4 px-1">
										{lang.title === selectedLanguage && (
											<FaCheck className="text-blue-500" />
										)}
									</span>
									<span className="w-3/4">{lang.title}</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default LanguageDropdown;
