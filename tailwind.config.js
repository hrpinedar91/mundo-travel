module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {         
        'sanFrancisco': "url('../img/san-fracisco.jpg')",  
		'yosemite': "url('../img/yosemite.jpg')",
		'seattle': "url('../img/seattle.jpg')",
		'new-york': "url('../img/new-york.jpg')",
		'norway': "url('../img/norway.jpg')",			 
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
    },
  },
  plugins: [],
}
