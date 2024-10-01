/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        blackWithOpacity: 'rgba(0, 0, 0, 0.75)', // using rgba for opacity
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
