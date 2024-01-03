const StoriesHeader = ({
	title,
	author,
	date,
	description,
	imageDesktop,
	imageTablet,
	imageMobile,
	alt,
}: {
	title: string;
	author: string;
	date?: string;
	description: string;
	imageDesktop: string;
	imageTablet: string;
	imageMobile: string;
	alt: string;
}) => {
	return (
		<div className="md:relative">
			<picture>
				<source srcSet={imageDesktop} media="(min-width: 1024px)" />
				<source srcSet={imageTablet} media="(min-width: 768px)" />
				<img className="w-full" src={imageMobile} alt={alt} />
			</picture>

			<div className="px-16 py-16 space-y-4 pb-14 bg-c-black text-c-white md:w-2/3 lg:w-2/5 md:hidden">
				<p className="text-sm font-bold tracking-widest uppercase ">
					Last month's featured story
				</p>
				<p className="text-4xl font-bold tracking-widest uppercase">{title}</p>
				<p className="space-x-2 text-sm">
					<span className="opacity-60">{date}</span>
					<span className="opacity-100">by {author}</span>
				</p>
				<p className="leading-6 opacity-60">{description}</p>
				<a
					href="#"
					className="flex items-center py-4 space-x-6 text-xs font-bold tracking-widest uppercase group">
					<span className="group-hover:underline">Read story</span>
					<span className="inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
							<g fill="none" fillRule="evenodd" stroke="#fff">
								<path d="M0 7h41.864M35.428 1l6 6-6 6" />
							</g>
						</svg>
					</span>
				</a>
			</div>

			<div className="bottom-0 hidden w-2/3 h-full p-8 space-y-8 md:flex md:flex-col md:justify-center md:absolute text-c-white lg:px-16 lg:w-1/2">
				<div className="pb-4 space-y-8">
					<p className="text-sm font-bold tracking-widest uppercase ">
						Last month's featured story
					</p>
					<p className="text-4xl font-bold tracking-widest uppercase">
						{title}
					</p>
					<p className="space-x-2 text-sm">
						<span className="opacity-60">{date}</span>
						<span className="opacity-100">by {author}</span>
					</p>
					<p className="leading-6 opacity-60">{description}</p>
				</div>
				<a
					href="#"
					className="flex items-center py-4 space-x-6 text-xs font-bold tracking-widest uppercase group">
					<span className="group-hover:underline">Read story</span>
					<span className="inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
							<g fill="none" fillRule="evenodd" stroke="#fff">
								<path d="M0 7h41.864M35.428 1l6 6-6 6" />
							</g>
						</svg>
					</span>
				</a>
			</div>
		</div>
	);
};

export default StoriesHeader;
