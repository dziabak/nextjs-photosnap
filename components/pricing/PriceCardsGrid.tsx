"use client";

import { useState } from "react";

import { PRICE_CARDS_DATA } from "@/lib/data";
import PriceCard from "./PriceCard";
import PriceToggle from "./PriceToggle";

const PriceCardsGrid = () => {
	const [isPriceYearly, setisPriceYearly] = useState(false);

	const priceToggleHandler = () => {
		setisPriceYearly(!isPriceYearly);
	};

	return (
		<div>
			<PriceToggle
				onChange={priceToggleHandler}
				isPriceYearly={isPriceYearly}
			/>
			<div className="grid grid-cols-1 gap-8 my-16 lg:grid-cols-3">
				{PRICE_CARDS_DATA.map((item) => (
					<PriceCard
						description={item.description}
						linkMonthly={item.linkMonthly}
						linkYearly={item.linkYearly}
						priceMonthly={item.priceMonthly}
						priceYearly={item.priceYearly}
						tagMonthly={item.tagMonthly}
						tagYearly={item.tagYearly}
						title={item.title}
						key={item.title}
						layoutIsHighlighted={item.layoutIsHighlighted}
						isPriceYearly={isPriceYearly}
						layoutHasOrnament={item.layoutHasOrnament}
					/>
				))}
			</div>
		</div>
	);
};

export default PriceCardsGrid;
