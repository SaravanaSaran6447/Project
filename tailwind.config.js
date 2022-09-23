/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Fira: ["Fira Sans"],
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans- serif"],
      lato: ["Lato", "sans-serif"],
    },
    screens: {
      mobile: "400px",
      tab: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1586px",
    },
    extend: {
      colors: {
        primaryBlue: "#003399",
        primaryGreen: "#00736d",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        lightGreen: "#dcfade",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        white: "#ffffff",
        black: "#000000",
        red: "#FF0000",
        blue: "#0000FF",
        // 'blueGray': '#f5f6ff',
        // 'blueGray': '#eef0ff',
        blueGray: "#f8f8ff",
        blueGreen: "#49aba7",
        greenBackground: "#a2ebc2",
      },
    },
  },
  plugins: [],
}