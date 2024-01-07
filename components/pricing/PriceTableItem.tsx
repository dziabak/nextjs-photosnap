import CheckmarkIcon from "./CheckmarkIcon";
import PlanName from "./PlanName";

const PriceTableItem = ({
	title,
	basic,
	pro,
	business,
}: {
	title: string;
	basic: boolean;
	pro: boolean;
	business: boolean;
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 border-b-[1px] border-c-grey-2 pb-4 md:pb-0">
			<p className="py-4 text-sm font-bold tracking-widest uppercase md:pl-6 ">
				{title}
			</p>
			<div className="grid grid-cols-3 md:text-center md:col-span-2">
				<div>
					<PlanName title="Basic" />
					{basic && <CheckmarkIcon />}
				</div>
				<div>
					<PlanName title="Pro" />
					{pro && <CheckmarkIcon />}
				</div>
				<div>
					<PlanName title="Business" />
					{business && <CheckmarkIcon />}
				</div>
			</div>
		</div>
	);
};

export default PriceTableItem;
