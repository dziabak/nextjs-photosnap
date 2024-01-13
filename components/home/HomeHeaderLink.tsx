import Link from "next/link";

import clsx from "clsx";

import HomeArrowIcon from "./HomeArrowIcon";

const HomeHeaderLink = ({
	isRouterLink,
	linkURL,
	linkText,
	layoutWhite,
}: {
	isRouterLink: boolean;
	linkURL: string;
	linkText: string;
	layoutWhite: boolean;
}) => {
	const cn =
		"flex items-center py-4 space-x-6 text-xs font-bold tracking-widest uppercase group";

	return isRouterLink ? (
		<Link href={linkURL} className={cn}>
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
		<a href={linkURL} target="_blank" rel="noopener" className={cn}>
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
	);
};

export default HomeHeaderLink;
