import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px,1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#11bbff",
            secondary: "#3b82f6",
            background: "#ffffff",
            content1: "#ffffff",
            content2: "#1d1d1d",
            content3: "#1d1d1d",
          },
        },
        dark: {
          colors: {
            secondary: "#11bbff",
            primary: "#3b82f6",
            background: "#0d0d0d",
            content1: "#1d1d1d",
            content2: "#ffffff",
            content3: "#dddddd",
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
  ],
};
