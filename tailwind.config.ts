import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        detail: "#D6B78B",
        black: "#000000",
        white: "#ffffff",
        dirty_white: "#E4E4DD",
        starry: "#263666",
        brown: "#4B3320",
        persistence: "#E7E2D0",
        daliof: "#8EAAD2",
        dali: "#BF8148",
        nighthawks: "#502B1C",
        hopper: "#212928",
        potato: "#9B9875",
        fall: "#BDA16C",
        rubens: "#604428",
      },
      boxShadow: {
        "3xl": "10px 10px 100px 70px black",
      },
    },
  },
  plugins: [],
};
export default config;
