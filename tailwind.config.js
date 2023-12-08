/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        DARK_BLUE: '#120331',
        PURPLE: '#8782ff',
        BLUE: '#3602A6',
        GREEN: '#bfe8e5',
        RED: '#f3bef1',
        PINK: '#f80ef2',
        WHITE: '#ffffff9c',
      },
    },
  },
  plugins: [],
};
