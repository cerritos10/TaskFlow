const {nextui} = require("@nextui-org/react");

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
