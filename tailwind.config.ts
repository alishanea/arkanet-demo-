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
        navy: {
          DEFAULT: "#0b1f3a",
          dark: "#071527",
          mid: "#16345f",
          bright: "#1d4ed8",
          hover: "#1740b3",
          faint: "#8891a3",
          muted: "#aab4c8",
        },
        subtle: "#f4f6fa",
        borderline: "#e2e6ee",
        arkanet: "#202B61",
      },
      fontFamily: {
        display: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
