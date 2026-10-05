import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #ffb400)",
        darkBg: "#111111",
        cardBg: "#252525",
        textMuted: "#ababab",
      },
    },
  },
  plugins: [],
};
export default config;
