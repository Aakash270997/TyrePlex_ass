/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // => @media (max-width: 1535px) { ... }
      "2xl": {max: "1535px"},

      // => @media (max-width: 1279px) { ... }
      xl: {max: "1279px"},

      // => @media (max-width: 1023px) { ... }
      lg: {max: "1023px"},

      // => @media (max-width: 767px) { ... }
      md: {max: "768px"},

      // => @media (max-width: 639px) { ... }
      sm: {max: "639px"},

      // => @media (max-width: 479px) { ... }
      sm: {max: "479px"},
    },
  },
  plugins: [],
}

