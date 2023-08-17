/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      cursor: {
        'league-default': 'url(./src/assets/default.cur), default',
        'league-pointer': 'url(./src/assets/pointer.cur), pointer'
      }
    },
  },
  plugins: [],
}

