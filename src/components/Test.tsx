import React from "react";

const Test = () => {
	return (
		<div className="m-32 transition-all hover:ease-out group w-96 h-48 hover:scale-125 duration-700 hover:translate-y-[-50px] hover:delay-700">
			<div className="overflow-hidden w-96 h-48 rounded-lg">
				<img
					className="object-cover w-96 h-48 rounded-lg"
					srcset="https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/4348/674348-v 128w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4348/674348-v 256w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4348/674348-v 384w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/sources/r1/cms/prod/4348/674348-v 640w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_750/sources/r1/cms/prod/4348/674348-v 750w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/sources/r1/cms/prod/4348/674348-v 828w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/4348/674348-v 1080w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1200/sources/r1/cms/prod/4348/674348-v 1200w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4348/674348-v 1920w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/4348/674348-v 2048w, https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v 3840w"
					src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4348/674348-v"
					alt=""
				/>
			</div>
			<div className="h-0 overflow-hidden group-hover:h-full duration-700 transition-all rounded-b-md w-96 bg-slate-800 group-hover:delay-700">
				<div className="flex justify-between  p-6">
					<div className="flex space-x-3 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555                7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
							/>
						</svg>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-white"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>

				<div className="flex">
					<p className="text-green-500 font-extrabold px-6">89% match</p>
					<p className="text-white">2 Seasons</p>
				</div>
				<p className="px-6 py-2 text-white">Exciting · Kids · Rivalry</p>
			</div>
		</div>
	);
};

export default Test;
