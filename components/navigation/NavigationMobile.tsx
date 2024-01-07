import React from "react";

import NavigationLink from "./NavigationLink";
import InviteButton from "./InviteButton";

const NavigationMobile = ({
	onNavigationLinkClick,
}: {
	onNavigationLinkClick: () => void;
}) => {
	return (
		<div className="absolute top-[72px] left-0 w-full md:hidden z-10">
			<div className="relative flex flex-col px-16 py-8 bg-c-white">
				<div className="relative flex flex-col space-y-1 font-bold tracking-widest text-center uppercase text-normal border-b-[1px] mb-4 pb-4">
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
				<InviteButton />
			</div>
			<div className="w-screen h-screen bg-black opacity-50"></div>
		</div>
	);
};

export default NavigationMobile;
