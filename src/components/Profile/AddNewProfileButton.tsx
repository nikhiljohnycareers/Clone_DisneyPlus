import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddNewProfileButton = () => {
	return (
		<>
			<div className="w-32 h-32 bg-gray-700 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer">
				<FaPlus className="text-white text-3xl" />
			</div>
		</>
	);
};

export default AddNewProfileButton;
