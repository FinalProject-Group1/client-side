/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#3CB87E",
          secondary: "#44d693",
        },
        yellow: {
          primary: "#FBBF28",
        },
        violet: {
          primary: "#A293DD",
        },
        red: {
          primary: "#DB5348",
        },
        blue: {
          primary: "#317AE1",
        },
      },
      fontFamily: { fredoka: ['"Fredoka"', "sans-serif"] },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
};
