const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
