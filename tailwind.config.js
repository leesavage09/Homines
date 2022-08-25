/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'grey': '#707070',
      'olive': '#BDC6AB',
    },
    fontFamily: {
      'base': 'Roboto, sans-serif'
    },
    fontSize: {
      'base': '1.1rem', //17.6
      'lg': '1.25rem',//20
      'xl': '1.5rem', //25
      '2xl': '2rem',  //30
      '3xl': '2.18rem', //35
      '4xl': '2.5rem',//40
      '5xl': '2.81rem',//45
    }
  },
  plugins: [],
}
