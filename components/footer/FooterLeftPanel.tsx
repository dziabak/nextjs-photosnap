const FooterLeftPanel = () => {
	return (
		<div className="mt-16 text-center md:mt-0 md:flex md:flex-col md:h-[156px] lg:h-[120px] md:justify-between md:text-right lg:w-1/3">
			<a
				href="https://example.com/photosnap/invite"
				target="_blank"
				rel="noopener"
				className="flex items-center justify-center p-4 mb-4 text-xs font-bold tracking-widest uppercase md:justify-end group md:pr-0">
				<span className="pr-6 group-hover:underline">Get an invite</span>
				<span className="inline-block">
					<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
						<g fill="none" fillRule="evenodd" stroke="#fff">
							<path d="M0 7h41.864M35.428 1l6 6-6 6" />
						</g>
					</svg>
				</span>
			</a>
			<p className="text-sm opacity-50">Copyright 2019. All Rights Reserved</p>
		</div>
	);
};

export default FooterLeftPanel;
