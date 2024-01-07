import { PRICING_HEADER_DATA } from "@/lib/data";
import PageHeader from "../../components/shared/PageHeader";
import PriceCardsGrid from "../../components/pricing/PriceCardsGrid";
import PriceTable from "../../components/pricing/PriceTable";
import BetaInvite from "../../components/shared/BetaInvite";

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
