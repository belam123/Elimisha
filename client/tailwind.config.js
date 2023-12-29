/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      },
      textColor: {
        'green-500': '#19A519',
        'yellow-700': '#BFBF00',
        'brown-500': '#996633',
        'purple-500': '#800080',
        'orange-500': '#ff9900',
        'blue-500': '#0000cc',
        'red-500': '#ff0000',
        'lightgreen-500': "#59E659"
      },
    },
  },
  plugins: [],
}

