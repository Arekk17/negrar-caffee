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
      white: '#fff',
      black: '#0C090A',
      cream: '#FFFADA',
      green: '#54DD8B',
      gray: '#999999',
      red: '#FF2E2E',
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
    },
  },
  plugins: [],
}
