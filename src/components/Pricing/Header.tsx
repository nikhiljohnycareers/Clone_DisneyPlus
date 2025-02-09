import React from "react";
import { FaXmark } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
	return (
		<>
			<div className="flex justify-between items-center w-full bg-gray-800 px-24 py-4">
				<div className="flex items-center gap-8">
					<FaXmark className="text-3xl text-white" />
					<Logo />
				</div>
				<div>
					<LanguageDropdown />
				</div>
			</div>
		</>
	);
};

export default Header;
