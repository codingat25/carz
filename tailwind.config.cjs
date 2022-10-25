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
        primaryButton: '#FD8E35',
        secondaryButton: '#F3F5F8',
        tertiaryButton: '#296D8F',
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
      backgroundImage: {
        'desktop-hero': "url('src/assets/img/desktop-hero.png')",
        'mobile-hero': "url('src/assets/img/mobile-hero.png')",
      },
      height: {
        'hero-height': '47.375rem'
      },
    },
  },
  plugins: [],
}
