import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F7F4", // warm ivory background
        paper: "#FFFFFF",
        ink: "#18202A", // primary text
        slate: "#5F6670", // secondary text
        line: "#E5E2DC", // hairline borders
        gold: "#B08A45", // accent — rules, icons, details
        bronze: "#86672F", // gold for text (AA contrast on ivory/white)
        navy: "#162433",
        "navy-soft": "#1E3044", // raised surfaces on navy
        stone: "#EEEAE2", // tonal panel behind imagery
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 36, 51, 0.04), 0 8px 24px -12px rgba(22, 36, 51, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
