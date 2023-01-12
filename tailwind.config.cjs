/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        GMB: {
          red: "#430220",
          yellow: "#FFD700",
          blue: "#115173",
          darkGray: "#181818",
          lightGray:"#4d4d4e"
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}