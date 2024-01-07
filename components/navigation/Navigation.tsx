"use client";

import { useState } from "react";
import { useLockedBody } from "usehooks-ts";

import Logo from "./Logo";
import InviteButton from "./InviteButton";

import HamburgerButton from "./HamburgerButton";
import NavigationMobile from "./NavigationMobile";

import NavigationDesktop from "./NavigationDesktop";

const Navigation = () => {
	const [isNavigationMobileOpened, setIsNavigationMobileOpened] =
		useState(false);

	const toggleMobileNavigation = () => {
		setIsNavigationMobileOpened(!isNavigationMobileOpened);
	};

	const closeMobileNavigation = () => {
		setIsNavigationMobileOpened(false);
	};

	useLockedBody(isNavigationMobileOpened, "root");

	return (
		<nav>
			<div className="flex flex-row items-center justify-between h-[72px] px-16 py-4 lg:px-32">
				<Logo onClick={closeMobileNavigation} />
				<NavigationDesktop onNavigationLinkClick={closeMobileNavigation} />
				<div className="hidden md:block">
					<InviteButton />
				</div>
				<HamburgerButton
					isNavigationMobileOpened={isNavigationMobileOpened}
					onClick={toggleMobileNavigation}
				/>
			</div>
			{isNavigationMobileOpened && (
				<NavigationMobile onNavigationLinkClick={closeMobileNavigation} />
			)}
		</nav>
	);
};

export default Navigation;
