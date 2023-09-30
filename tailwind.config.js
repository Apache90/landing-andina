/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans"],
      },
      width: {
        120: "120px",
      },
      colors: {
        borraDeVino: "#8C001A",
        primary: "#232949",
      },
      boxShadow: {
        before: "-10px 10px 0 #FFF",
        before2: "-10px -10px 0 #FFF",
        after: "-10px 10px 0 #FFF",
        after2: "-10px 10px 0 #8C001A",
      },
    },
  },
  plugins: [],
};
