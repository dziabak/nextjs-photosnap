import Link from "next/link";

const NavigationLink = ({ link, text }: { link: string; text: string }) => {
	return (
		<Link href={link} className="p-3 transition-opacity hover:opacity-30">
			{text}
		</Link>
	);
};

export default NavigationLink;
