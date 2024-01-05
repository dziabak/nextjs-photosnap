"use client";

import { useState } from "react";

import Logo from "./Logo";
import NavigationLink from "./NavigationLink";
import InviteButton from "../ui/InviteButton";

import HamburgerButton from "./HamburgerButton";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
	const [isNavigationMobileOpened, setIsNavigationMobileOpened] =
		useState(false);

	const toggleMobileNavigation = () => {
		setIsNavigationMobileOpened(!isNavigationMobileOpened);
	};

	const closeMobileNavigation = () => {
		setIsNavigationMobileOpened(false);
	};

	return (
		<nav>
			<div className="flex flex-row items-center justify-between h-[72px] px-16 py-4 lg:px-32">
				<Logo />
				<div className="hidden space-x-2 text-xs font-bold tracking-widest text-center uppercase md:block">
					<NavigationLink
						link="/stories"
						text="Stories"
						onClick={closeMobileNavigation}
					/>
					<NavigationLink
						link="/features"
						text="Features"
						onClick={closeMobileNavigation}
					/>
					<NavigationLink
						link="/pricing"
						text="Pricing"
						onClick={closeMobileNavigation}
					/>
				</div>
				<div className="hidden md:block">
					<InviteButton />
				</div>
				<HamburgerButton
					isNavigationMobileOpened={isNavigationMobileOpened}
					onClick={toggleMobileNavigation}
				/>
			</div>
			{isNavigationMobileOpened && (
				<NavigationMobile onClick={closeMobileNavigation} />
			)}
		</nav>
	);
};

export default Navigation;
