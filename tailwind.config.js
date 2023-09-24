/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fredoka": ['Fredoka', 'sans'],
      },
      width:{
        '120': '120px',
      },
      colors:{
        borraDeVino: '#8C001A',
      }
    },
  },
  plugins: [],
}

