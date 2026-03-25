/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // Enables dark mode support
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scans all React source files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec5b13",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
      },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};