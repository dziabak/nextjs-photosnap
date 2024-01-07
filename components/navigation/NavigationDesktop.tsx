import NavigationLink from "./NavigationLink";

const NavigationDesktop = ({
	onNavigationLinkClick,
}: {
	onNavigationLinkClick: () => void;
}) => {
	return (
		<div className="hidden space-x-2 text-xs font-bold tracking-widest text-center uppercase md:block">
			<NavigationLink
				link="/stories"
				text="Stories"
				onClick={() => onNavigationLinkClick()}
			/>
			<NavigationLink
				link="/features"
				text="Features"
				onClick={() => onNavigationLinkClick()}
			/>
			<NavigationLink
				link="/pricing"
				text="Pricing"
				onClick={() => onNavigationLinkClick()}
			/>
		</div>
	);
};

export default NavigationDesktop;
