import Logo from "../Navigation/Logo";
import FooterLeftPanel from "./FooterLeftPanel";
import FooterLink from "./FooterLink";
import SocialMediaLink from "./SocialMediaLink";

const Footer = () => {
	return (
		<footer className="bg-c-black text-c-white">
			<div className="flex flex-col items-center h-full px-8 py-16 md:flex-row md:justify-between lg:px-32 lg:py-8">
				<div className="flex flex-col justify-between md:h-[156px] lg:h-[120px]">
					<Logo />
					<div className="hidden md:text-sm md:font-bold md:tracking-widest md:text-center md:uppercase md:flex md:flex-row md:space-x-4 lg:hidden md:pl-2">
						<FooterLink link="/" text="Home" />
						<FooterLink link="/stories" text="Stories" />
						<FooterLink link="/features" text="Features" />
						<FooterLink link="/pricing" text="Pricing" />
					</div>
					<div className="flex my-4 mb-12 md:mb-0">
						<SocialMediaLink />
						<SocialMediaLink />
						<SocialMediaLink />
						<SocialMediaLink />
						<SocialMediaLink />
					</div>
				</div>
				<div className="flex flex-col justify-between h-[156px] lg:h-[120px] text-sm font-bold tracking-widest text-center uppercase lg:text-left md:hidden lg:flex lg:w-1/2 lg:ml-16 lg:text-xs">
					<FooterLink link="/" text="Home" />
					<FooterLink link="/stories" text="Stories" />
					<FooterLink link="/features" text="Features" />
					<FooterLink link="/pricing" text="Pricing" />
				</div>
				<FooterLeftPanel />
			</div>
		</footer>
	);
};

export default Footer;
