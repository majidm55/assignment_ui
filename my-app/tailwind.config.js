/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    roboto: ['Roboto', 'serif']
  },
  plugins: [],
}
