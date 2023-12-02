/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        PURPLE: '#8782ff',
        BLUE: '#a793fc',
        GREEN: '#bfe8e5',
        RED: '#f3bef1',
        PINK: '#f80ef2',
      },
    },
  },
  plugins: [],
};
