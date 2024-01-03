import { PRICE_CARDS_DATA } from "@/app/lib/data";
import PriceCard from "./PriceCard";

const PriceCardsGrid = () => {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
			{PRICE_CARDS_DATA.map((item) => (
				<PriceCard
					description={item.description}
					price={item.price}
					title={item.title}
					key={item.title}
					layoutIsHighlighted={item.layoutIsHighlighted}
				/>
			))}
		</div>
	);
};

export default PriceCardsGrid;
