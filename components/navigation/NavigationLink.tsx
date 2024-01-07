import Link from "next/link";

const NavigationLink = ({
	link,
	text,
	onClick,
}: {
	link: string;
	text: string;
	onClick: () => void;
}) => {
	return (
		<Link
			href={link}
			className="p-3 transition-opacity hover:opacity-30"
			onClick={() => onClick()}>
			{text}
		</Link>
	);
};

export default NavigationLink;
