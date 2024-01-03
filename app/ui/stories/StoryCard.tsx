const StoryCard = ({
	title,
	author,
	date,
	link,
	imageDesktop,
	imageMobile,
	alt,
}: {
	title: string;
	author: string;
	date?: string;
	link: string;
	imageDesktop: string;
	imageMobile: string;
	alt: string;
}) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener"
			className="relative lg:transition-transform lg:ease-out lg:hover:-translate-y-4 group">
			<picture>
				<source srcSet={imageDesktop} media="(min-width: 1024px)" />
				<img className="w-full" src={imageMobile} alt={alt} />
			</picture>
			<div className="absolute top-0 w-full h-full bg-gradient-to-t from-black"></div>
			<div className="absolute bottom-0 w-full p-8 space-y-4 text-c-white">
				<div className="border-b-[1px] border-c-white border-opacity-30 pb-4 space-y-2">
					<p className="text-sm">{date}</p>
					<p className="text-lg font-bold">{title}</p>
					<p className="text-sm">by {author}</p>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-xs font-bold tracking-widest uppercase">
						Read Story
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
						<g fill="none" fillRule="evenodd" stroke="#fff">
							<path d="M0 7h41.864M35.428 1l6 6-6 6" />
						</g>
					</svg>
				</div>
			</div>
			<div className="absolute bottom-0 h-0 w-full bg-gradient-to-tr from-[#FFC593] from-10% via-[#BC7198] via-40% to-[#5A77FF] to-80% group-hover:h-[6px] transition-all ease-out"></div>
		</a>
	);
};

export default StoryCard;
