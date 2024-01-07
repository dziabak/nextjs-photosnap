import { Metadata } from "next";

import { FEATURES_HEADER_DATA } from "../../lib/data";
import PageHeader from "../../components/shared/PageHeader";
import FeaturesGrid from "../../components/features/FeaturesGrid";
import BetaInvite from "../../components/shared/BetaInvite";

export const metadata: Metadata = {
	title: "Features | Photosnap",
	description: "Features page for Photosnap services.",
};

const FeaturesPage = () => {
	return (
		<div>
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
