/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroSlider1: "url('./src/assets/hero-slider-1.png')",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "600",
      },
      colors: {
        bgVideo: "rgba(0,0,0,.6)",
      },
      screens:{
         desktopLg: { max: "1240px" },
         desktopMd: { max: "1025px" },
      }
    },
  },
  plugins: [],
};
