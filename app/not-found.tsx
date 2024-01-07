import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page not found | Photosnap",
	description:
		"Page for Photosnap services which is displayed in case the requested page does not exist.",
};

const NotFound = () => {
	return (
		<main>
			<div className="space-y-4 text-center">
				<h1 className="text-3xl font-bold">Page not found</h1>
				<p className="text-lg opacity-50">
					We could not find the page you&apos;re looking for.
				</p>
			</div>
		</main>
	);
};

export default NotFound;
