/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        homeDesktop:"url('../starter-code/assets/home/background-home-desktop.jpg')",
        homeTablet:"url('../starter-code/assets/home/background-home-tablet.jpg')",
        homeMobile:"url('../starter-code/assets/home/background-home-mobile.jpg')",

        destinationDesktop:"url('../starter-code/assets/destination/background-destination-desktop.jpg')",
        destinationTablet:"url('../starter-code/assets/destination/background-destination-tablet.jpg')",
        destinationMobile:"url('../starter-code/assets/destination/background-destination-mobile.jpg')",
        crewDesktop:"url('../starter-code/assets/technology/background-technology-desktop.jpg')",
        crewTablet:"url('../starter-code/assets/technology/background-technology-tablet.jpg')",
        crewMobile:"url('../starter-code/assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily:{
        "Barlow": ['"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

