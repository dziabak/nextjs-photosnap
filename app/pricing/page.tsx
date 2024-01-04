import { PRICING_HEADER_DATA } from "@/app/lib/data";
import PageHeader from "../ui/shared/PageHeader";
import PriceCardsGrid from "../ui/pricing/PriceCardsGrid";
import PriceTable from "../ui/pricing/PriceTable";
import BetaInvite from "../ui/shared/BetaInvite";

const PricingPage = () => {
	return (
		<div>
			{PRICING_HEADER_DATA.map((item) => (
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
			<PriceCardsGrid />
			<PriceTable />
			<BetaInvite />
		</div>
	);
};

export default PricingPage;
