/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: ['selector', '[data-theme: dark]'], 
  safelist: [
    'dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0165FC",
        primarydark: "#0151c9",
        primarylight: "#3283fe",
      }
    },
  },
  plugins: [],
}

