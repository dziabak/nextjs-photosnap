import Link from "next/link";

const FooterLink = ({ link, title }: { link: string; title: string }) => {
	return (
		<Link href={link} className="transition-opacity hover:opacity-30">
			{title}
		</Link>
	);
};

export default FooterLink;
