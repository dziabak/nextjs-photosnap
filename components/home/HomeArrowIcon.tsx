const HomeArrowIcon = ({ color }: { color: boolean }) => {
	return color ? (
		<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
			<g fill="none" fillRule="evenodd" stroke="#fff">
				<path d="M0 7h41.864M35.428 1l6 6-6 6" />
			</g>
		</svg>
	) : (
		<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
			<g fill="none" fillRule="evenodd" stroke="#000">
				<path d="M0 7h41.864M35.428 1l6 6-6 6" />
			</g>
		</svg>
	);
};

export default HomeArrowIcon;
