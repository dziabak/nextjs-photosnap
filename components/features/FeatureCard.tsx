const FeatureCard = ({
	icon,
	alt,
	title,
	description,
}: {
	icon: string;
	alt: string;
	title: string;
	description: string;
}) => {
	return (
		<div className="flex flex-col items-center p-8 px-24 space-y-8  md:px-16 lg:px-8">
			<div className="h-[72px] flex items-center">
				<img src={icon} alt={alt} />
			</div>

			<div className="space-y-4 text-center">
				<p className="text-lg font-bold">{title}</p>
				<p className="opacity-60">{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
