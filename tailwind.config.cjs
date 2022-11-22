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
        orange: '#FD8E35',
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
      fontSize: {
        xs: '.8rem',
        sm: '1rem',
        base: '1.3rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '3.5rem',
        '5xl': '4.5rem',
      },
      backgroundImage: {
        'desktop-hero': "url('src/assets/img/desktop-hero.png')",
        'mobile-hero': "url('src/assets/img/mobile-hero.png')",
        'logo': "url('src/assets/img/HeaderLogo.png')"
      },
      height: {
     
      },
      screens: {
        sm: '480px',
        md: '600px',
        lg: '1020px',
        xl: '1440px'
      },
      backgroundPosition: {
        'right-2': '85%'
      },

    },
  },
  plugins: [],
}
