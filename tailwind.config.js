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
      brownDark: '#835F50',
      white: '#EEEEEE',
      black: '#000',
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
