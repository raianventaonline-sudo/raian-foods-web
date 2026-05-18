import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      display: [
        "var(--font-display)",
        "Fraunces",
        "Georgia",
        "ui-serif",
        "serif"
      ],
      sans: [
        "var(--font-sans)",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "SF Pro Text",
        "Helvetica Neue",
        "Segoe UI",
        "system-ui",
        "sans-serif"
      ]
    },
    extend: {
      colors: {
        cream: "#F7F3EA",
        ink: "#18201C",
        muted: "#687066",
        olive: "#526B4D",
        terracotta: "#B86744",
        beige: "#E9DDC9",
        sage: "#EDF2EA",
        charcoal: "#26312B",
        porcelain: "#FFFFFF",
        line: "#DDD6C9"
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(24, 32, 28, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
