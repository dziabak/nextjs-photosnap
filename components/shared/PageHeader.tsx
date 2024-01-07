const PageHeader = ({
	mobileImage,
	tabletImage,
	desktopImage,
	alt,
	title,
	description,
}: {
	mobileImage: string;
	tabletImage: string;
	desktopImage: string;
	alt: string;
	title: string;
	description: string;
}) => {
	return (
		<section>
			<div className="flex flex-col md:flex-row-reverse">
				<picture>
					<source srcSet={desktopImage} media="(min-width: 1024px)" />
					<source srcSet={tabletImage} media="(min-width: 768px)" />
					<img
						className="object-cover w-full h-full md:h-[490px]"
						src={mobileImage}
						alt={alt}
					/>
				</picture>
				<div className="relative px-16 py-16 space-y-4 bg-c-black text-c-white md:w-2/3 lg:w-2/5 md:flex md:flex-col md:justify-center">
					<div className="absolute top-0 h-[6px] w-32 bg-gradient-to-tr from-[#FFC593] from-10% via-[#BC7198] via-40% to-[#5A77FF] to-80% md:w-[6px] md:h-[300px] md:left-0 md:inset-y-1/2 md:-translate-y-1/2"></div>
					<h1 className="text-4xl font-bold tracking-widest uppercase">
						{title}
					</h1>
					<p className="leading-6 opacity-60">{description}</p>
				</div>
			</div>
		</section>
	);
};

export default PageHeader;
