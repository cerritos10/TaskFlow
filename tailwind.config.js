const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'daisy-bush': {
          '50': '#f3f2ff',
          '100': '#eae6ff',
          '200': '#d8d1ff',
          '300': '#bcacff',
          '400': '#9b7eff',
          '500': '#7d49ff',
          '600': '#6d24ff',
          '700': '#5f13ee',
          '800': '#4f0fc8',
          '900': '#450fa9',
          '950': '#27066f',
        },
        'midnight': {
          '50': '#eaf4ff',
          '100': '#d9eaff',
          '200': '#bad7ff',
          '300': '#90bbff',
          '400': '#6592ff',
          '500': '#4169ff',
          '600': '#203dff',
          '700': '#152ded',
          '800': '#152bbe',
          '900': '#1a2c95',
          '950': '#070b27',
        },

      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


// tailwind.config.js
// const {nextui} = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };
