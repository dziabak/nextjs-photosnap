const SocialMediaLink = ({ icon }: { icon: JSX.Element }) => {
	return (
		<a href="#" target="_blank" rel="noopener" className="p-2 pb-0 group">
			{icon}
		</a>
	);
};

export default SocialMediaLink;
