/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgBtn: "rgb(33,33,33)",
      white: "#ffffff",
      bsBgColor: "rgb(135,106,72)",
      bsColor: "rgb(231,178,116)",
      atBgColor: "rgb(53,76,40)",
      atColor: "rgb(97,212,122)",
    },
    fontFamily: {
      popins: ["Popins", "sans-serif"],
    },
  },
  plugins: [],
};
