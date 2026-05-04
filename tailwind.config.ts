import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F0",
        ink: "#1F1F1F",
        muted: "#666666",
        olive: "#6F7D4F",
        terracotta: "#B96F45",
        beige: "#E8DDC8",
        porcelain: "#FFFFFF",
        line: "#DDD2BF"
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 16px 40px rgba(31, 31, 31, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
