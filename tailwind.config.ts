import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        typography: {
          primary: "var(--foreground)",
          secondary: "#86909F",
          teriary: "#0a254059",
          fields: "#445a70",
        },
        accent: {
          50: "#ffeeeb",
          100: "#ffddd6",
          200: "#ff8970",
          500: "#ff5733",
        },
        tag: {
          Q: "#87E178",
          WC: "#FFC300",
          LL: "#c084fc",
          SE: "#85b0f5",
          PR: "#fb923c",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
