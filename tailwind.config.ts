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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
