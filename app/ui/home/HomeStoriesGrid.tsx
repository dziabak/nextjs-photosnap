import { STORIES_DATA } from "@/app/lib/data";
import StoryCard from "../stories/StoryCard";

const HOME_STORIES_DATA = STORIES_DATA.slice(0, 4);

const HomeStoriesGrid = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			{HOME_STORIES_DATA.map((item) => (
				<StoryCard
					key={item.title}
					alt={item.alt}
					author={item.author}
					// date={item.date}
					imageDesktop={item.imageDesktop}
					imageMobile={item.imageMobile}
					link={item.link}
					title={item.title}
				/>
			))}
		</section>
	);
};

export default HomeStoriesGrid;
