/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'theme-color': '#f1dc13',
				'primary-gray': '#070e12',
				'secondary-gray': '#0a131a',
			},
		},
	},
	plugins: [],
};
