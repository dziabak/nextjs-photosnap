import { FEATURES_DATA } from "@/app/lib/data";
import FeatureCard from "../features/FeatureCard";

const HOME_FEATURES_DATA = FEATURES_DATA.slice(0, 3);

const HomeFeaturesGrid = () => {
	return (
		<section className="grid grid-cols-1 my-24 lg:grid-cols-3">
			{HOME_FEATURES_DATA.map((item) => (
				<FeatureCard
					alt={item.alt}
					description={item.description}
					icon={item.icon}
					title={item.title}
					key={item.title}
				/>
			))}
		</section>
	);
};

export default HomeFeaturesGrid;
