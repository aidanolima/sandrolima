import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <--- Muito importante
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        neon: {
          DEFAULT: "rgb(var(--neon) / <alpha-value>)",
          dim: "#abd600",
          light: "rgba(204, 255, 0, 0.1)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          container: "rgb(var(--surface-container) / <alpha-value>)",
          low: "rgb(var(--surface-low) / <alpha-value>)",
          lowest: "rgb(var(--surface-lowest) / <alpha-value>)",
          high: "rgb(var(--surface-high) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "#c0c1ff",
          container: "#3131c0",
        },
        muted: "#c4c9ac",
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      spacing: {
        "section-padding": "120px",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
