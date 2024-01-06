import { FOOTER_LINKS_DATA } from "@/app/lib/data";

import FooterLogo from "./FooterLogo";
import FooterLeftPanel from "./FooterLeftPanel";
import FooterLink from "./FooterLink";
import SocialMediaLink from "./SocialMediaLink";

import FacebookLogo from "./social-media-icons/FacebookLogo";
import YoutubeLogo from "./social-media-icons/YoutubeLogo";
import TwitterLogo from "./social-media-icons/TwitterLogo";
import PinterestLogo from "./social-media-icons/PinterestLogo";
import InstagramLogo from "./social-media-icons/InstagramLogo";

const Footer = () => {
	return (
		<footer className="bg-c-black text-c-white">
			<div className="flex flex-col items-center h-full px-8 py-16 md:flex-row md:justify-between lg:px-32 lg:py-8">
				<div className="flex flex-col justify-between md:h-[156px] lg:h-[120px]">
					<FooterLogo />
					<div className="hidden md:text-sm md:font-bold md:tracking-widest md:text-center md:uppercase md:flex md:flex-row md:space-x-4 lg:hidden md:pl-2">
						{FOOTER_LINKS_DATA.map((item) => (
							<FooterLink
								link={item.link}
								title={item.title}
								key={item.title}
							/>
						))}
					</div>
					<div className="flex my-4 mb-12 md:mb-0">
						<SocialMediaLink icon={<FacebookLogo />} />
						<SocialMediaLink icon={<YoutubeLogo />} />
						<SocialMediaLink icon={<TwitterLogo />} />
						<SocialMediaLink icon={<PinterestLogo />} />
						<SocialMediaLink icon={<InstagramLogo />} />
					</div>
				</div>
				<div className="flex flex-col justify-between h-[156px] lg:h-[120px] text-sm font-bold tracking-widest text-center uppercase lg:text-left md:hidden lg:flex lg:w-1/2 lg:ml-16 lg:text-xs">
					{FOOTER_LINKS_DATA.map((item) => (
						<FooterLink link={item.link} title={item.title} key={item.title} />
					))}
				</div>
				<FooterLeftPanel />
			</div>
		</footer>
	);
};

export default Footer;
