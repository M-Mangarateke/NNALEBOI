/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        cream: '#F4F1EA',
        'dark-bg': '#0B0B0D',
        'dark-card': '#141419',
        'warm-muted': '#B8B2A6',
      },
    },
  },
  plugins: [],
}
