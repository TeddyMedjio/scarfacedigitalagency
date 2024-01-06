const defaultTheme = require("tailwindcss/defaultTheme");

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "3xl": "1680px",
      },
    },
    extend: {
      fontFamily: {
        header: ['"Big Shoulders Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: "#AFFF00",
          60: "#334A0",
        },
        blu: {
          50: "#0D1320",
          60: "#070C16",
          70: "#0B1217",
        },
        gra: {
          50: "#B7BABC",
        },
      },
      screens: {
        "3xl": "1680px",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
