/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Dark-Gray": "hsl(0, 0%, 63%)",
      "Black": "hsl(0, 0%, 0%)",
      "White": "hsl(0, 0%, 100%)",
      "Very-Dark-Gray": "hsl(0, 0%, 27%)",
    },
    extend: {},
  },
  plugins: [],
}