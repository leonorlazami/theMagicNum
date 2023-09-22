/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-one': ['Anonymous Pro', 'monospace'],
        'custom-two': ['Karla', 'sans-serif']
      },
      colors: {
        'sky-blue': '#8ECAE6',
        'blue-green': '#219EBC',
        'prussian-blue': '#023047',
        'custom-yellow': '#FFB703',
        'custom-orange': '#FB8500'
      },
      letterSpacing: {
        widest: '0.40em',
        wider: '0.32em'
      },
      borderColor: {
        'custom-orange': '#FB8500',
      }
    },
  },
  plugins: [],
}

