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
      },
      'animation': {
        'text': 'text 2.5s ease infinite',
        'fade-in-out': 'fade-in 1s ease-in forwards, fade-out 1s ease-out forwards'
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'fade-in': {
          '100%': {
            'opacity': '1'
          }
        },
        'fade-out': {
          '0%': {
            'opacity': '1',
          },
          '100%': {
            'opacity': '0'
          }
        }
      }
    },
  },
  plugins: [],
}

