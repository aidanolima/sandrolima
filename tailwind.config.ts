import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111317",
        foreground: "#e2e2e8",
        neon: {
          DEFAULT: "#ccff00",
          dim: "#abd600",
          light: "rgba(204, 255, 0, 0.1)",
        },
        surface: {
          DEFAULT: "#111317",
          container: "#1e2024",
          low: "#1a1c20",
          lowest: "#0c0e12",
          high: "#282a2e",
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
