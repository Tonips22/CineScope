/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#242424',
        'white': '#F8F8F8',
        'gray': '#D0D0D0',
        'primary': '#1C7BC9',
        'secondary' : '#B1F11A'
      }
    },
  },
  plugins: [],
}

