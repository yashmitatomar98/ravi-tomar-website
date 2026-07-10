import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep laboratory black with subtle green undertone
        lab: {
          black: "#07110F",
          deep: "#0D1B18",
          800: "#0F211D",
          700: "#132924",
        },
        ivory: "#F3F0E8",
        muted: "#9BA8A3",
        accent: "#B7FF4A", // used extremely sparingly
        champagne: "#B89B5E",
        sci: "#79C7B5",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.32em",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "11xl": ["12.5rem", { lineHeight: "0.86" }],
      },
      transitionTimingFunction: {
        precision: "cubic-bezier(0.16, 1, 0.3, 1)",
        lab: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        grainShift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "30%": { transform: "translate(3%, -8%)" },
          "50%": { transform: "translate(-4%, 6%)" },
          "70%": { transform: "translate(6%, 2%)" },
          "90%": { transform: "translate(-2%, 4%)" },
        },
        scanMove: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(2000%)", opacity: "0" },
        },
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        grain: "grainShift 8s steps(6) infinite",
        marquee: "marqueeX 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
