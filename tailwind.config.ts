import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: {
          white: "var(--white)",
          black: "var(--black)",
          blue: "var(--blue)",
          purple: "var(--purple)",
          grey: "var(--grey)",
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        monument: ["var(--font-monument)"],
      },
    },
  },
  plugins: [],
};
export default config;
