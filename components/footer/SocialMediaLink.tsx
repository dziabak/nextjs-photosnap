const SocialMediaLink = ({
	link,
	icon,
}: {
	link: string;
	icon: JSX.Element;
}) => {
	return (
		<a href={link} target="_blank" rel="noopener" className="p-2 pb-0 group">
			{icon}
		</a>
	);
};

export default SocialMediaLink;
