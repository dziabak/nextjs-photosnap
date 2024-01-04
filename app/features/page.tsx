import { FEATURES_HEADER_DATA } from "../lib/data";
import PageHeader from "../ui/shared/PageHeader";
import FeaturesGrid from "../ui/features/FeaturesGrid";
import BetaInvite from "../ui/shared/BetaInvite";

const FeaturesPage = () => {
	return (
		<div>
			{" "}
			{FEATURES_HEADER_DATA.map((item) => (
				<PageHeader
					key={item.title}
					alt={item.alt}
					description={item.description}
					title={item.title}
					desktopImage={item.desktopImage}
					tabletImage={item.tabletImage}
					mobileImage={item.mobileImage}
				/>
			))}
			<FeaturesGrid />
			<BetaInvite />
		</div>
	);
};

export default FeaturesPage;
