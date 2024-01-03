import HomeHeaderGrid from "./ui/home/HomeHeaderGrid";
import HomeStoriesGrid from "./ui/home/HomeStoriesGrid";
import HomeFeaturesGrid from "./ui/home/HomeFeaturesGrid";

export default function Home() {
	return (
		<main>
			<p>Home</p>
			<HomeHeaderGrid />
			<HomeStoriesGrid />
			<HomeFeaturesGrid />
		</main>
	);
}
