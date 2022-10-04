/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeButton: '#FD8E35',
        grayButton: '#F3F5F8',
        cyanButton: '#296D8F',
        bgBlue: '#F3F5F8',
        bgDark: '#1F2033',
        fontColorDark: '#070920',
        fontColorCyan: '#296D8F',
        fontColorOrange: '#FD8E35',
        fontColorGray: '#585858',
      },
      fontFamily: {
        'sans': ['Mulish', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
