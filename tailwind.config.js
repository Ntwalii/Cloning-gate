/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        umutuku:"#FFF232",
        bannerGray:"rgb(51,51,51)",
        navGray:"#D5D5D5",
        midBrown:"#A18A4D",
        heroGray:"#363735",
        heroBtnGray:"rgb(51,62,63)",
        newsGray:"#F2F2F2"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'danfo':['Danfo','serif'],
        'lato':['lato','sans-serif'] 
    }
    },
  },
  plugins: [],
}

