import { STORIES_HEADER_DATA } from "../lib/data";
import StoriesHeader from "../ui/stories/StoriesHeader";
import StoriesGrid from "../ui/stories/StoriesGrid";

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
