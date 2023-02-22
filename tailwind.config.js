/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        background: '#171717',
        primary: '#9B1333',
        secondary: '#BB2648',
        accent: '#087E8B',
      },

      screens: {
        desktop: '1440px',
      }
    },

    fontFamily: {
      garamond: ['"Cormorant Garamond"'],
      raleway: ['Raleway'],
      montserrat: ['Montserrat'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
