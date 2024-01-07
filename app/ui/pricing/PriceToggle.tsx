"use client";

import clsx from "clsx";

const PriceToggle = ({
	isPriceYearly,
	onChange,
}: {
	isPriceYearly: boolean;
	onChange: () => void;
}) => {
	const priceToggleHandler = () => {
		onChange();
	};

	return (
		<div className="flex items-center justify-center mt-16 mb-8 space-x-8 lg:mb-20 lg:mt-24">
			<label
				htmlFor="price"
				className={clsx(
					"font-bold cursor-pointer text-c-black",
					isPriceYearly && "opacity-50",
					!isPriceYearly && "opacity-100"
				)}>
				Monthly
			</label>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					id="price"
					type="checkbox"
					value=""
					className="sr-only peer"
					onChange={priceToggleHandler}
				/>
				<div className="w-[50px] h-7 bg-c-grey-2 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[0.25rem] after:start-[5px] after:bg-c-black   after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-c-black peer-checked:after:bg-c-white"></div>
			</label>
			<label
				htmlFor="price"
				className={clsx(
					"font-bold cursor-pointer text-c-black",
					isPriceYearly && "opacity-100",
					!isPriceYearly && "opacity-50"
				)}>
				Yearly
			</label>
		</div>
	);
};

export default PriceToggle;
