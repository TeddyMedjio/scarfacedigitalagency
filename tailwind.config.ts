import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Big Shoulders Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: "#AFFF00",
          60: "#334A0",
        },
        blue: {
          50: "#0D1320",
          60: "#070C16",
          70: "#0B1217",
        },
        gray: {
          50: "#B7BABC",
        },
      },

      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};
export default config;
