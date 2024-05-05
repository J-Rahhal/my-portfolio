/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"],
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
