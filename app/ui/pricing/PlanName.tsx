const PlanName = ({ title }: { title: string }) => {
	return (
		<p className="pb-1 text-xs font-bold tracking-widest uppercase opacity-50 md:hidden">
			{title}
		</p>
	);
};

export default PlanName;
