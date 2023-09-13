/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      colors: {
        'orange-brand': '#FB7C45',
        'gray-brand': '#74747C',
        'gray-footer': '#343c44',
      }
    },
  },
  plugins: [],
}

