/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'primary': "#142d4c",
        'secondary': "#385170",
        'ternary': "#9fd3c7",
        'quaternary': "#ececec",
        'quinary': "#F8F3E6",
        'dark-primary': "#1A120B",
        'dark-secondary': "#3C2A21",
        'dark-ternary': "#D5CEA3",
        'dark-quaternary': "#E5E5CB"
      }

      //["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"]

      // ["#ececec", "#9fd3c7", "#385170", "#142d4c"]
    },
  },
  plugins: [],
}

