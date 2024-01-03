import { STORIES_DATA } from "../../utils/data";
import StoryCard from "./StoryCard";

const StoriesGrid = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			{STORIES_DATA.map((item) => (
				<StoryCard
					key={item.title}
					alt={item.alt}
					author={item.author}
					date={item.date}
					imageDesktop={item.imageDesktop}
					imageMobile={item.imageMobile}
					link={item.link}
					title={item.title}
				/>
			))}
		</section>
	);
};

export default StoriesGrid;
