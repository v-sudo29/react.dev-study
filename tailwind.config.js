/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text colors
        primary: '#23272F',
        brand: '#087EA4',
        link: '#087EA4',
        wash: '#FFFFFF',

        // Gray
        'gray-50': '#5E687E',
        'gray-30': '#99A1B3',
      }
    },
  },
  plugins: [],
}

