const TwitterLogo = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
			<defs>
				<linearGradient
					id="twitter"
					x1="100%"
					x2="0%"
					y1="16.979%"
					y2="83.021%">
					<stop offset="0%" stopColor="#65FFEB" />
					<stop offset="100%" stopColor="#27718A" />
				</linearGradient>
			</defs>
			<path
				className="transition-all group-hover:fill-[url(#twitter)]"
				fill="#fff"
				d="M86.66 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.901 1.318 3.68 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
				transform="translate(-66 -1)"
			/>
		</svg>
	);
};

export default TwitterLogo;
