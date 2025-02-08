import React from "react";
import MediaItem from "./MediaItem";

const CollectionPage = () => {
	return (
		<>
			<div className="mx-36">
				<h1 className="flex justify-center items-center text-3xl font-bold m-16">
					Kids Movies
				</h1>
				<div className="grid grid-cols-6 gap-6 mb-36">
					<MediaItem viewType="GRID" index={1} />
					<MediaItem viewType="GRID" index={2} />
					<MediaItem viewType="GRID" index={3} />
					<MediaItem viewType="GRID" index={4} />
					<MediaItem viewType="GRID" index={5} />
					<MediaItem viewType="GRID" index={6} />
					<MediaItem viewType="GRID" index={7} />
					<MediaItem viewType="GRID" index={8} />
					<MediaItem viewType="GRID" index={9} />
					<MediaItem viewType="GRID" index={10} />
					<MediaItem viewType="GRID" index={11} />
					<MediaItem viewType="GRID" index={12} />
					<MediaItem viewType="GRID" index={13} />
					<MediaItem viewType="GRID" index={14} />
				</div>
			</div>
		</>
	);
};

export default CollectionPage;
