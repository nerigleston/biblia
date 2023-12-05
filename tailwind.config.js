/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'SE': {'max': '667px'},
        
        '4K': {'min': '2560px'},
      }
    },
  },
  plugins: [],
}