import clsx from "clsx";

const PriceCard = ({
	title,
	description,
	price,
	// priceYearly,
	periodFlag,
	layoutIsHighlighted,
}: {
	title: string;
	description: string;
	price: string;
	priceYearly?: string;
	periodFlag?: boolean;
	layoutIsHighlighted: boolean;
}) => {
	return (
		<div
			className={clsx(
				"flex flex-col justify-between p-12 space-y-12 text-center  md:text-left lg:text-center",
				!layoutIsHighlighted && "bg-c-grey",
				layoutIsHighlighted && "bg-c-black text-c-white lg:-my-8 lg:py-20"
			)}>
			<div className="space-y-12 md:flex md:justify-between md:space-y-0 lg:flex-col lg:space-y-12 lg:h-full">
				<div className="space-y-4 md:w-1/2 lg:w-full">
					<p className="text-2xl font-bold">{title}</p>
					<p className="opacity-60">{description}</p>
				</div>
				<div className="md:text-right lg:text-center">
					<p className="[ price-label-basic ] text-4xl font-bold md:text-5xl">
						${price}
					</p>
					<p className="opacity-60">{periodFlag}</p>
				</div>
			</div>
			<a
				href="#"
				className={clsx(
					"w-full p-3 font-bold tracking-widest text-center uppercase transition-colors bg-c-black text-c-white md:w-1/2 lg:w-full hover:bg-c-grey-2 hover:text-c-black",
					layoutIsHighlighted &&
						"bg-c-grey text-c-black hover:bg-c-grey-2 hover:text-c-black"
				)}>
				Pick Plan
			</a>
		</div>
	);
};

export default PriceCard;
