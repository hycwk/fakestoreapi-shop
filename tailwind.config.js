/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
		fontFamily: {
			store: ['Roboto Condensed', 'Arial', 'sans-serif'],
		},
  },
  plugins: [require('daisyui')],
}

