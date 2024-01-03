import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"c-black": "#000000",
				"c-white": "#FFFFFF",
				"c-grey": "#F5F5F5",
				"c-grey-2": "#DFDFDF",
			},
			container: {
				center: true,
				padding: {
					// DEFAULT: "0rem",
					// sm: "4rem",
					// lg: "6rem",
					// xl: "8rem",
					"2xl": "8rem",
				},
			},
		},
	},
	plugins: [],
};
export default config;
