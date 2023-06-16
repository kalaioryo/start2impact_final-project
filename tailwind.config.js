/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#48120E",
        'secondary': "#AB3E16",
        'ternary': "#EFAA52",
        'quaternary': "#E7CC8F",
        'quinary': "#F8F3E6",
      }
      //["#F8F3E6", "#E7CC8F", "#EFAA52", "#AB3E16", "#48120E"]
    },
  },
  plugins: [],
}

