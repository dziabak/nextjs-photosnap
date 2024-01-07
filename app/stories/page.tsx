import { Metadata } from "next";

import { STORIES_HEADER_DATA } from "../../lib/data";
import StoriesHeader from "../../components/stories/StoriesHeader";
import StoriesGrid from "../../components/stories/StoriesGrid";

export const metadata: Metadata = {
	title: "Stories | Photosnap",
	description: "Stories page for Photosnap services.",
};

const StoriesPage = () => {
	return (
		<div>
			{STORIES_HEADER_DATA.map((item) => (
				<StoriesHeader
					alt={item.alt}
					author={item.author}
					description={item.description}
					imageDesktop={item.imageDesktop}
					imageTablet={item.imageTablet}
					imageMobile={item.imageMobile}
					title={item.title}
					date={item.date}
					key={item.title}
				/>
			))}
			<StoriesGrid />
		</div>
	);
};

export default StoriesPage;
