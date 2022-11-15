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
        primaryColor: '#FD8E35',
        secondaryColor: '#F3F5F8',
        tertiaryColor: '#296D8F',
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
     
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1020px',
        xl: '1440px'
      },
    },
  },
  plugins: [],
}
