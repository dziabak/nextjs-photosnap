import { BETA_INVITE_DATA } from "@/lib/data";

const data = BETA_INVITE_DATA;

const BetaInvite = ({
	mobileImage,
	tabletImage,
	desktopImage,
	alt,
	mainText,
	linkText,
}: {
	mobileImage?: string;
	tabletImage?: string;
	desktopImage?: string;
	alt?: string;
	mainText?: string;
	linkText?: string;
}) => {
	return (
		<section>
			<div className="relative">
				<picture>
					<source srcSet={data.desktopImage} media="(min-width: 1024px)" />
					<source srcSet={data.tabletImage} media="(min-width: 768px)" />
					<img
						className="object-cover w-full h-[280px]"
						src={data.mobileImage}
						alt={data.alt}
					/>
				</picture>
				<div className="absolute top-0 left-8 h-[6px] w-32 bg-gradient-to-tr from-[#FFC593] from-10% via-[#BC7198] via-40% to-[#5A77FF] to-80% md:w-[6px] md:h-full md:left-0"></div>
				<div className="absolute top-0 flex flex-col justify-center w-full h-full p-8 space-y-8 text-c-white md:flex-row md:items-center md:justify-between lg:px-32">
					<p className="text-4xl font-bold tracking-widest uppercase md:w-1/2 lg:w-1/3">
						{data.mainText}
					</p>
					<a
						href="https://example.com/photosnap/invite"
						target="_blank"
						rel="noopener"
						className="flex items-center space-x-6 text-xs font-bold tracking-widest uppercase group">
						<span className="group-hover:underline">{data.linkText}</span>
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
		</section>
	);
};

export default BetaInvite;
