/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-blue':'#C5EAD9',
        'black':'#253D4E',
        'basegreen':'#3BB77E',
        'sea-green': '#02934Eff',
        'mint-cream': '#F1FFFAff',
        'emerald': '#5DC98Fff',
        'jade': '#30AE6Eff',
        'pink':'#FEEFEA',
        'blue':'#ECFFEC'
      },
      fontFamily:{
        Mont:["Noto Sans"]
      },
      screens: {
        'sm': '620px', // small tablet
        'md': '760px',//laptop
        'lg': '1200px',//desktop
      },
    },
  },
  plugins: [],
}

