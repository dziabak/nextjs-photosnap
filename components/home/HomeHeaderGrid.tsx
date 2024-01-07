import { HOME_HEADER_DATA } from "@/lib/data";
import HomeHeader from "./HomeHeader";

const HomeHeaderGrid = () => {
	return (
		<section>
			{HOME_HEADER_DATA.map((item) => (
				<HomeHeader
					alt={item.alt}
					description={item.description}
					imageDesktop={item.imageDesktop}
					imageMobile={item.imageMobile}
					imageTablet={item.imageTablet}
					linkText={item.linkText}
					isRouterLink={item.isRouterLink}
					linkURL={item.linkURL}
					title={item.title}
					key={item.title}
					layoutMirrored={item.layoutMirrored}
					layoutHasOrnament={item.layoutHasOrnament}
					layoutWhite={item.layoutWhite}
				/>
			))}
		</section>
	);
};

export default HomeHeaderGrid;
