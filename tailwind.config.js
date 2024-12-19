/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'yellow-primary': '#ffaa11',
  			'yellow-secondary': '#fead33',
  			'white-primary': '#f5f4f4',
  			'white-secondary': '#e1e0e1',
  			'red-primary': '#f73735',
  			'green-primary': '#1dbabb',
  			'black-primary': '#1b1b1a',
  			'black-secondary': '#272726',
  			'black-tersiary': '#333232',
  			'black-light': '#323233',
  			'black-light-2': '#3b3b3a',
  			'black-extra-light': '#434343',
  			'black-bg-nav': '#282828',
  			 			
  		},
  		fontFamily: {
  			Poiret: [
  				'Poiret',
  				'sans serif'
  			],
  			Ubuntu: [
  				'Ubuntu',
  				'sans serif'
  			]
  		}
  	}
  },

}

