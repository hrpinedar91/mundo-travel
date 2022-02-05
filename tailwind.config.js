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
	plugins: [],
}
