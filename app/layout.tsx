import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Home | Photosnap",
	description: "Home page for Photosnap services.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${dm_sans.className} container min-h-screen flex flex-col justify-between`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
