import React, { useState } from "react";
import {
	FaAngleDown,
	FaPlay,
	FaPlus,
	FaVolumeHigh,
	FaVolumeXmark,
	FaXmark,
} from "react-icons/fa6";

const data = {
	year: 2016,
	rating: "U/A 7+",
	duration: "1h 43m",
	languages: 3,
	description:
		"A young woman uses her navigational talents to set sail for a fabled island. Joining her on the adventure is her hero, the legendary demi-god Maui.",
};

const MediaItem = ({ viewType = "LIST", index }) => {
	const i = viewType === "LIST" ? [1] : [1, 6];
	console.log(i);
	const [zIndex, setZIndex] = useState(0);
	const [langaugeOptionsToggle, setLangaugeOptionsToggle] = useState(false);
	const [volumeToggle, setVolumeToggle] = useState(false);

	const styles = {
		zIndex: zIndex,
	};

	return (
		<div
			className="group flex-shrink-0 w-48 h-60 rounded-lg relative cursor-pointer"
			style={styles}
			onMouseEnter={() => setZIndex(2)}
			onMouseLeave={() => setZIndex(0)}
		>
			<div className="overflow-hidden">
				<img
					className="object-cover w-48 h-60 rounded-lg"
					srcset="https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/4348/674348-v 128w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4348/674348-v 256w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4348/674348-v 384w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/sources/r1/cms/prod/4348/674348-v 640w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_750/sources/r1/cms/prod/4348/674348-v 750w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/sources/r1/cms/prod/4348/674348-v 828w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/4348/674348-v 1080w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4348/674348-v 1200w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4348/674348-v 1920w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/4348/674348-v 2048w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v 3840w"
					src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v"
					alt=""
				/>
			</div>
			<div
				className={`absolute ${
					index % 6 === 1
						? "-top-12 left-0"
						: index % 6 === 0
						? "-top-12 right-0"
						: "-top-12 -left-12"
				}  shadow-2xl shadow-black hidden flex-col w-72 gap-2 group-hover:flex group-hover:scale-105 duration-300 transition-all ease-in bg-gray-800 rounded-lg`}
			>
				{langaugeOptionsToggle ? (
					<div className="w-72 h-80 rounded-lg bg-gray-800 text-white">
						<div className="px-4 py-2 flex justify-between items-center">
							<span className="uppercase text-lg">Audio Language</span>
							<FaXmark onClick={() => setLangaugeOptionsToggle(false)} />
						</div>

						<div></div>
					</div>
				) : (
					<>
						<div className="overflow-hidden w-72 h-36 rounded-lg">
							<button
								onClick={() => setLangaugeOptionsToggle(true)}
								className="absolute flex justify-center items-center text-white text-sm p-2 gap-2"
							>
								<span>English</span>
								<FaAngleDown />
							</button>
							<button
								onClick={() => setVolumeToggle(!volumeToggle)}
								className="absolute top-28 right-0 flex justify-center items-center text-white text-sm p-2 gap-2"
							>
								{volumeToggle ? <FaVolumeHigh /> : <FaVolumeXmark />}
							</button>
							<img
								className="object-cover w-72 h-36 rounded-lg"
								srcset="https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/4348/674348-v 128w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4348/674348-v 256w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4348/674348-v 384w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/sources/r1/cms/prod/4348/674348-v 640w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_750/sources/r1/cms/prod/4348/674348-v 750w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/sources/r1/cms/prod/4348/674348-v 828w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/4348/674348-v 1080w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4348/674348-v 1200w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4348/674348-v 1920w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/4348/674348-v 2048w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v 3840w"
								src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v"
								alt=""
							/>
						</div>
						<div className="flex justify-center items-center gap-3 w-full px-2">
							<button className="flex justify-center items-center bg-gray-100 gap-2 p-3 w-10/12 rounded-lg hover:scale-105 duration-300 transition-all ease-in-out">
								<FaPlay className="w-3 h-3" />
								<span className="text-sm font-semibold">Watch Now</span>
							</button>
							<button className="flex justify-center items-center bg-gray-600 rounded-lg p-4 w-2/12 text-white">
								<FaPlus className="w-3 h-3" />
							</button>
						</div>
						<div className="flex items-center gap-1 font-semibold text-sm px-2 text-gray-200">
							<p className="flex gap-1">
								<span>{data.year}</span>
								<span>&#x2022;</span>
							</p>
							<p className="flex gap-1">
								<span>{data.rating}</span>
								<span>&#x2022;</span>
							</p>
							<p className="flex gap-1">
								<span>{data.duration}</span>
								<span>&#x2022;</span>
							</p>
							<p className="flex gap-1">
								<span>{data.languages} Languages</span>
							</p>
						</div>
						<div className="font-light text-sm text-gray-400 px-2 pb-2">
							{data.description}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default MediaItem;
