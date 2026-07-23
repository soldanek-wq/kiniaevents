import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0F",
        ivory: "#F7F5F2",
        beige: "#EFE7D8",
        gold: {
          light: "#D9C098",
          DEFAULT: "#C6A56B",
          dark: "#A3814E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
