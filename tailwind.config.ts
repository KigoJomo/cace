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
        'white': '#FFFFFF',
        'light-gray': '#E6E7E9',
        'medium-gray': '#A8ACB7',
        'dark-blue': '#0B1326',
      },
    },
  },
  plugins: [],
};
export default config;
