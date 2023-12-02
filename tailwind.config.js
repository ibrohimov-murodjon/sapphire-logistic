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
      screens: {
        desktopLg: { max: "1240px" },
        desktopMid: { max: "1161px" },
        desktopMd: { max: "1025px" },
        tabletLgMax: { max: "987px" },
        tabletLgMd: { max: "950px" },
        tabletLg: { max: "940px" },
        desktopSm: { max: "910px" },
        desktopMin: { max: "865px" },
        tabletMax: { max: "794px" },
        maxSm: { max: "768px" },
        mobileMax: { max: "675px" },
        mobileLg: { max: "545px" },
        mobileMd: { max: "400px" },
        mobileSm: { max: "365px" },
        xs: "480px",
        ss: "620px",
        sm: "769px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
