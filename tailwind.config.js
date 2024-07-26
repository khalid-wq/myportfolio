/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0b0b", //background
        seconday: "#161616", //zinc
        neutral: "#bbbbbb",
      },
    },
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
    },
  },
  plugins: [],
};
