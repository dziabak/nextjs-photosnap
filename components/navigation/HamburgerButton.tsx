import React from "react";

const HamburgerButton = ({
	isNavigationMobileOpened,
	onClick,
}: {
	isNavigationMobileOpened: boolean;
	onClick: () => void;
}) => {
	const toggleMobileNavigation = () => {
		onClick();
	};

	return (
		<button className="p-4 pr-0 md:hidden" onClick={toggleMobileNavigation}>
			{!isNavigationMobileOpened ? (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="6">
					<g fillRule="evenodd">
						<path d="M0 0h20v1H0zM0 5h20v1H0z" />
					</g>
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
					<path
						fillRule="evenodd"
						d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
					/>
				</svg>
			)}
		</button>
	);
};

export default HamburgerButton;
