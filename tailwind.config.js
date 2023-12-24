/* eslint-env node */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brownLight: '#B77E66',
      brown: '#A0583C',
      brownDark: '#734A39',
      white: '#EEEEEE',
      black: '#000',
      cream: '#FFFADA',
      green: '#54DD8B',
      grayDark: 'rgba(0,0,0, 0.7)',
      brownTransparent: 'rgba(34, 27, 24, 0.6)',
    },
    extend: {
      fontSize: {
        xs: '12px',
        s: '24px',
        m: '36px',
        l: '48px',
        xl: '64px',
      },
      backgroundImage: {
        landing: "url('./src/assets/coffeeblur.png')",
        navigation: "linear-gradient(rgba(30, 21, 17, 0.9), rgba(30, 21, 17, 0.9)), url('./src/assets/bgnav.png')",
        about: "url('./src/assets/barista.png')",
        timeOpen: "url('./src/assets/timeOpen.png')",
        ourMenu: "url('./src/assets/ourmenubg.png')",
        opinion: "url('./src/assets/opinionbg.png)",
        footer: "linear-gradient(rgba(29, 23, 20, 0.6), rgba(29, 23, 20, 0.6)), url('./src/assets/footer.png')",
        signin: "url('./src/assets/signinbg.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      backgroundPosition: {
        center: 'center',
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      },
    },
  },
  plugins: [],
}
