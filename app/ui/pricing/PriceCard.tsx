"use client";

import clsx from "clsx";

const PriceCard = ({
	title,
	description,
	linkMonthly,
	linkYearly,
	priceMonthly,
	priceYearly,
	tagMonthly,
	tagYearly,
	layoutIsHighlighted,
	isPriceYearly,
}: {
	title: string;
	description: string;
	linkMonthly: string;
	linkYearly: string;
	priceMonthly: string;
	priceYearly: string;
	tagMonthly: string;
	tagYearly: string;
	layoutIsHighlighted: boolean;
	isPriceYearly: boolean;
}) => {
	let link;
	const linkConstructor: string = !isPriceYearly
		? (link = linkMonthly)
		: (link = linkYearly);

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
					{!isPriceYearly ? (
						<p className="text-4xl font-bold md:text-5xl">${priceMonthly}</p>
					) : (
						<p className="text-4xl font-bold md:text-5xl">${priceYearly}</p>
					)}
					{!isPriceYearly ? (
						<p className="opacity-60">{tagMonthly}</p>
					) : (
						<p className="opacity-60">{tagYearly}</p>
					)}
				</div>
			</div>
			<a
				href={link}
				target="_blank"
				rel="noopener"
				className={clsx(
					"w-full p-3 font-bold tracking-widest text-center uppercase transition-colors  md:w-1/2 lg:w-full ",
					layoutIsHighlighted &&
						"bg-c-grey text-c-black hover:bg-c-grey-2 hover:text-c-black",
					!layoutIsHighlighted &&
						"bg-c-black text-c-white hover:bg-c-grey-2 hover:text-c-black"
				)}>
				Pick Plan
			</a>
		</div>
	);
};

export default PriceCard;
