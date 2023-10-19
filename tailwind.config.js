/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'heroSlider1': "url('./src/assets/hero-slider-1.png')",
      }
    },
  },
  plugins: [],
};

