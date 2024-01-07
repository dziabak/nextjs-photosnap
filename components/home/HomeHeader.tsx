import clsx from "clsx";
import Link from "next/link";
import HomeArrowIcon from "./HomeArrowIcon";

const HomeHeader = ({
	imageDesktop,
	imageTablet,
	imageMobile,
	alt,
	title,
	description,
	linkText,
	isRouterLink,
	linkURL,
	layoutMirrored,
	layoutHasOrnament,
	layoutWhite,
}: {
	imageDesktop: string;
	imageTablet: string;
	imageMobile: string;
	alt: string;
	title: string;
	description: string;
	linkText: string;
	isRouterLink: boolean;
	linkURL: string;
	layoutMirrored: boolean;
	layoutHasOrnament: boolean;
	layoutWhite: boolean;
}) => {
	return (
		<div
			className={clsx(
				"flex flex-col md:flex-row",
				!layoutMirrored && "md:flex-row-reverse"
			)}>
			<picture>
				<source srcSet={imageDesktop} media="(min-width: 1024px)" />
				<source srcSet={imageTablet} media="(min-width: 768px)" />
				<img
					className="object-cover w-full h-full md:h-[650px]"
					src={imageMobile}
					alt={alt}
				/>
			</picture>
			<div
				className={clsx(
					"relative px-16 py-16 space-y-4 bg-c-black text-c-white md:w-2/3 lg:w-2/5 md:flex md:flex-col md:justify-center md:space-y-8",
					layoutWhite && "bg-c-white"
				)}>
				{layoutHasOrnament && (
					<div className="absolute top-0 h-[6px] w-32 bg-gradient-to-tr from-[#FFC593] from-10% via-[#BC7198] via-40% to-[#5A77FF] to-80% md:w-[6px] md:h-[300px] md:left-0 md:inset-y-1/2 md:-translate-y-1/2"></div>
				)}
				<h1
					className={clsx(
						"text-4xl font-bold tracking-widest uppercase",
						layoutWhite && "text-c-black"
					)}>
					{title}
				</h1>
				<p
					className={clsx(
						"leading-6 opacity-60",
						layoutWhite && "text-c-black"
					)}>
					{description}
				</p>
				{isRouterLink ? (
					<Link
						href={linkURL}
						className="flex items-center py-4 space-x-6 text-xs font-bold tracking-widest uppercase group">
						<span
							className={clsx(
								"group-hover:underline",
								layoutWhite && "text-c-black"
							)}>
							{linkText}
						</span>
						<span className="inline-block">
							<HomeArrowIcon color={!layoutWhite} />
						</span>
					</Link>
				) : (
					<a
						href={linkURL}
						target="_blank"
						rel="noopener"
						className="flex items-center py-4 space-x-6 text-xs font-bold tracking-widest uppercase group">
						<span
							className={clsx(
								"group-hover:underline",
								layoutWhite && "text-c-black"
							)}>
							{linkText}
						</span>
						<span className="inline-block">
							<HomeArrowIcon color={!layoutWhite} />
						</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default HomeHeader;
