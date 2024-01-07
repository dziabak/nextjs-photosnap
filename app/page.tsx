import HomeHeaderGrid from "../components/home/HomeHeaderGrid";
import HomeStoriesGrid from "../components/home/HomeStoriesGrid";
import HomeFeaturesGrid from "../components/home/HomeFeaturesGrid";

export default function Home() {
	return (
		<main>
			<HomeHeaderGrid />
			<HomeStoriesGrid />
			<HomeFeaturesGrid />
		</main>
	);
}
