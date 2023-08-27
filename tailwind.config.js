/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'lg': { 'min': '851px', },
      'md': { 'max': '850px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '450px' }
    },
    extend: {
      colors: {
        "primary": {
          500: "#6500A0",
        },
        "black": "#000000",
        "light": "#ffffff"
      }
    },
    
  },
  plugins: [],
}

