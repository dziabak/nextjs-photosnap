import { Link } from "react-router-dom";

const FooterLink = ({ link, text }: { link: string; text: string }) => {
	return (
		<Link to={link} className="p-2 pt-0 transition-opacity hover:opacity-30">
			{text}
		</Link>
	);
};

export default FooterLink;
