import Logo from "./Logo";
import NavigationLink from "./NavigationLink";
import InviteButton from "../ui/InviteButton";

const Navigation = () => {
	return (
		<nav>
			<div className="flex flex-row items-center justify-between h-[72px] px-16 py-4 lg:px-32">
				<Logo />
				<div className="hidden space-x-2 text-xs font-bold tracking-widest text-center uppercase md:block">
					<NavigationLink link="/stories" text="Stories" />
					<NavigationLink link="/features" text="Features" />
					<NavigationLink link="/pricing" text="Pricing" />
				</div>
				<InviteButton />
			</div>
		</nav>
	);
};

export default Navigation;
