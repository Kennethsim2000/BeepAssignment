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

        dirtwhite: "#F6F3EE",
        lightbiege: "#EBDED4",
        lightbrown: "#C2B19C",
        coffeebrown: "#AB9685",
        greybrown: "#94857B",
        brown: "#8A6851",
        mattebrown: "#7A5E59",
        darkbrown: "#544541",

      },
    },
    fontFamily: {
      wdc: ["var(--font-sofia)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
