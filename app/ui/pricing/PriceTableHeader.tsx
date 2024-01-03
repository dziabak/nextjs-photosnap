const PriceTableHeader = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 border-b-[1px] border-c-black">
			<p className="py-4 text-sm font-bold tracking-widest uppercase md:pl-6">
				The Features
			</p>
			<div className="hidden md:grid md:grid-cols-3 md:text-center md:col-span-2">
				<p className="py-4 text-sm font-bold tracking-widest uppercase">
					Basic
				</p>
				<p className="py-4 text-sm font-bold tracking-widest uppercase">Pro</p>
				<p className="py-4 text-sm font-bold tracking-widest uppercase">
					Business
				</p>
			</div>
		</div>
	);
};

export default PriceTableHeader;
