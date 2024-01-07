import { FOOTER_LINKS_DATA } from "@/lib/data";

import FooterLogo from "./FooterLogo";
import FooterLeftPanel from "./FooterLeftPanel";
import FooterLink from "./FooterLink";
import SocialMediaLink from "./SocialMediaLink";

import FacebookLogo from "./social-media-icons/FacebookLogo";
import YoutubeLogo from "./social-media-icons/YoutubeLogo";
import TwitterLogo from "./social-media-icons/TwitterLogo";
import PinterestLogo from "./social-media-icons/PinterestLogo";
import InstagramLogo from "./social-media-icons/InstagramLogo";

const FOOTER_SOCIAL_MEDIA_LINKS_DATA = [
	{ link: "https://example.com/photosnap/facebook", icon: <FacebookLogo /> },
	{ link: "https://example.com/photosnap/youtube", icon: <YoutubeLogo /> },
	{ link: "https://example.com/photosnap/twitter", icon: <TwitterLogo /> },
	{ link: "https://example.com/photosnap/pinterest", icon: <PinterestLogo /> },
	{ link: "https://example.com/photosnap/instagram", icon: <InstagramLogo /> },
];

const footerLinks = FOOTER_LINKS_DATA.map((item) => (
	<FooterLink link={item.link} title={item.title} key={item.title} />
));

const Footer = () => {
	return (
		<footer className="bg-c-black text-c-white">
			<div className="flex flex-col items-center h-full px-8 py-16 md:flex-row md:justify-between lg:px-32 lg:py-8">
				<div className="flex flex-col justify-between md:h-[156px] lg:h-[120px]">
					<FooterLogo />
					<div className="hidden md:text-sm md:font-bold md:tracking-widest md:text-center md:uppercase md:flex md:flex-row md:space-x-4 lg:hidden md:pl-2">
						{footerLinks}
					</div>
					<div className="flex my-4 mb-12 md:mb-0">
						{FOOTER_SOCIAL_MEDIA_LINKS_DATA.map((item) => (
							<SocialMediaLink
								icon={item.icon}
								link={item.link}
								key={item.link}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col justify-between h-[156px] lg:h-[120px] text-sm font-bold tracking-widest text-center uppercase lg:text-left md:hidden lg:flex lg:w-1/2 lg:ml-16 lg:text-xs">
					{footerLinks}
				</div>
				<FooterLeftPanel />
			</div>
		</footer>
	);
};

export default Footer;
