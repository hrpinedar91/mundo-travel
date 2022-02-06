module.exports = {
	content: ["./public/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				'sanFrancisco': "url('../img/SanFrancisco.png')",
				'yosemite': "url('../img/yosemite.jpg')",
				'seattle': "url('../img/seattle.jpg')",
				'new-york': "url('../img/new-york.jpg')",
				'norway': "url('../img/norway.jpg')",
				'switzerland': "url('../img/switzerland.jpg')",
				'los-angeles': "url('../img/LA.jpg')",
				'chicago': "url('../img/chicago.jpg')",
				'miami': "url('../img/miami.jpg')",
				'bali': "url('../img/bali.jpg')",
				'sanFrancisco-desktop': "url('../img/sanFranciscoDesktop.jpg')",
			},
			backgroundColor: theme => ({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'terciary': '#61AEC9',

			}),
			textColor: theme => ({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'terciary': '#61AEC9',
			}),
			fontFamily: {
				'Monserrat': ['Montserrat', 'sans-serif']
			},
			ringColor: {
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}
		},
		variants: {
			with: ["responsive", "hover", "focus"]
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
