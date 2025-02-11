import React from "react";
import PlaceHolderAvatar from "../../assets/placeholder_avatar.jpg";
const Avatar = () => {
	return (
		<>
			<div className="overflow-hidden w-32 h-32 bg-gray-700 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer">
				<img src={PlaceHolderAvatar} alt="" />
			</div>
		</>
	);
};

export default Avatar;
