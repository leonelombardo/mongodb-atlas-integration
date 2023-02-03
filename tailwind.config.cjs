/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          500: "#1a1a1a",
          400: "#2a2a2a",
          300: "#4b4b4b",
          200: "#6a6a6a",
          100: "#8f8f8f"
        },
        secondary: {
          500: "#fff",
          400: "#f9f9f9",
          300: "#efefef",
          200: "#cfcfcf",
          100: "#a9a9a9"
        },
        mongodb: {
          500: "#00684a"
        }
      }
    },
  },
  plugins: [],
}