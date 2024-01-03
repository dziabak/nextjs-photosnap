import { PRICE_TABLE_DATA } from "../../utils/data";
import PriceTableHeader from "./PriceTableHeader";
import PriceTableItem from "./PriceTableItem";

const PriceTable = () => {
	return (
		<section className="p-8 mt-16 mb-32 2xl:px-32">
			<p className="hidden mb-8 text-4xl font-bold tracking-widest text-center uppercase md:block">
				Compare
			</p>
			<PriceTableHeader />
			{PRICE_TABLE_DATA.map((item) => (
				<PriceTableItem
					title={item.title}
					basic={item.basic}
					pro={item.pro}
					business={item.business}
					key={item.title}
				/>
			))}
		</section>
	);
};

export default PriceTable;
