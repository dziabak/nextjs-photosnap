import { FEATURES_DATA } from "@/lib/data";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
	return (
		<section className="grid grid-cols-1 my-24 md:grid-cols-2 lg:grid-cols-3">
			{FEATURES_DATA.map((item) => (
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

export default FeaturesGrid;
