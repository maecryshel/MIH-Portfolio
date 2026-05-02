import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:  ["'DM Sans'", "system-ui", "sans-serif"],
      },
      colors: {
        cream:    "#FAF7F4",
        parchment:"#EDE8E0",
        mauve: {
          DEFAULT: "#8B6471",
          light:   "#C9A6B0",
          bg:      "#F5EDF0",
        },
        salmon: {
          DEFAULT: "#E8A59A",
          light:   "#F5CBBF",
        },
        peach: {
          DEFAULT: "#F2C9BE",
          light:   "#FAE8E2",
        },
        sage: {
          DEFAULT: "#A3B89A",
          dark:    "#6F8C65",
          light:   "#D5E4CF",
        },
        ink: {
          DEFAULT: "#2C2220",
          2:       "#5A4A47",
          3:       "#9A8A87",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
