/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./**/*.{astro,html,js,ts}',
		'./pages/**/*.{astro,html,js,ts}',
		'./components/**/*.{astro,html,js,ts}',
		'./layouts/**/*.{astro,html,js,ts}',
	],
	theme: {
		fontFamily: {
			sans: ['blender-pro-regular', 'sans-serif'],
			heading: ['blender-pro-heavy', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
