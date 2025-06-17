/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': '#1a73e8',
        'google-gray': '#5f6368',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 