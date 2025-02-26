/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Droid Sans"', 'sans-serif'],
        'display': ['Roboto', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        'title2': ['"Love Ya Like A Sister"', 'sans-serif']
      },
      colors: {
        green: "#153C3F",
        whiteYe: "#BFBB9F",
        gray: "#E0E0E0"
      },
      backgroundImage: {
        'header-img': "url('/src/assets/bg.jpg')",
      },
      screens: {
        'tall': {'raw': '(min-width: 1000px)'},
        'mediano': {'raw': '(min-width: 920px)'}
      }
    },
  },
  plugins: [],
}

