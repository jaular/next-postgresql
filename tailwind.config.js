const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        gray: colors.blueGray,
        red: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
