/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#A1BFDD",
        customForm: "#D8E8F2",
        customIntro: "#62809A",
        studentButton: "#62809A",
        tutorButton: "#244667",
        registerButton: "#B8CCDD",
      },
    },
    fontFamily: {
      wdc: ["var(--font-sofia)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
