/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': 'var(--dark)',
        'white': 'var(--white)',
        'gray': 'var(--gray)',
        'primary': 'var(--primary)',
        'secondary' : 'var(--secondary)'
      }
    },
  },
  plugins: [animations],
}

