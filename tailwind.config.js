/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      handwritten: ['Lazydog', 'cursive'],
    },
    extend: {
      colors: {
        pink: {
          light: '#FFC5CE',
          dark: '#FFAEB8',
        },
        blue: {
          light: '#5B99E7',
          dark: '#3C6CA8',
        },
        purple: {
          dark: '#9C98BA',
        },
        red: '#922417',
      },
    },
  },
  plugins: [],
};
