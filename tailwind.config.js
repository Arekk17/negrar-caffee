/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      'brown-light': '#B77E66',
      'brown': '#A0583C',
      'brown-dark': '#835F50',
      'white': '#EEEEEE',
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
      },
    },
  },
  plugins: [],
}
