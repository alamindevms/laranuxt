// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
         cyan: colors.cyan,
         teal: colors.teal
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
