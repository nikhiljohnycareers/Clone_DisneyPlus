import React, { useState } from "react";
import {
	FaAngleDown,
	FaPlay,
	FaPlus,
	FaVolumeHigh,
	FaVolumeXmark,
	FaXmark,
} from "react-icons/fa6";
import MediaItem from "./MediaItem";

const data = {
	year: 2016,
	rating: "U/A 7+",
	duration: "1h 43m",
	languages: 3,
	description:
		"A young woman uses her navigational talents to set sail for a fabled island. Joining her on the adventure is her hero, the legendary demi-god Maui.",
};

const MoreLikeThis = () => {
	return (
		<>
			<div>More Like This</div>
			<div className="bg-gray-200 flex mx-36 h-96 items-center overflow-visible overflow-x-auto gap-8 scrollbar-hide scroll-smooth">
				<MediaItem index={1} />
				<MediaItem index={2} />
				<MediaItem index={3} />
				<MediaItem index={4} />
				<MediaItem index={5} />
				<MediaItem index={6} />
				<MediaItem index={7} />
				<MediaItem index={8} />
				<MediaItem index={9} />
				<MediaItem index={10} />
				<MediaItem index={11} />
				<MediaItem index={12} />
				<MediaItem index={13} />
				<MediaItem index={14} />
				<MediaItem index={15} />
				<MediaItem index={16} />
				<MediaItem index={17} />
				<MediaItem index={18} />
				<MediaItem index={19} />
			</div>
			<div>More Like This</div>
			<div className="bg-gray-200 flex mx-36 h-96 items-center overflow-visible overflow-x-auto gap-8 scrollbar-hide scroll-smooth">
				<MediaItem index={1} />
				<MediaItem index={2} />
				<MediaItem index={3} />
				<MediaItem index={4} />
				<MediaItem index={5} />
				<MediaItem index={6} />
				<MediaItem index={7} />
				<MediaItem index={8} />
				<MediaItem index={9} />
				<MediaItem index={10} />
				<MediaItem index={11} />
				<MediaItem index={12} />
				<MediaItem index={13} />
				<MediaItem index={14} />
				<MediaItem index={15} />
				<MediaItem index={16} />
				<MediaItem index={17} />
				<MediaItem index={18} />
				<MediaItem index={19} />
			</div>
		</>
	);
};

export default MoreLikeThis;
