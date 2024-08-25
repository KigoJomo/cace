// tailwind.config.js
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
        white: '#FFFFFF',
        'light-gray': '#E6E7E9',
        'medium-gray': '#A8ACB7',
        'dark-blue': '#0B1326',
      },
      fontSize: {
        xs: 'calc(var(--base-font-size) * 0.75)',
        sm: 'calc(var(--base-font-size) * 0.875)',
        base: 'var(--base-font-size)',
        lg: 'calc(var(--base-font-size) * 1.125)',
        xl: 'calc(var(--base-font-size) * 1.25)',
        '2xl': 'calc(var(--base-font-size) * 1.5)',
        '3xl': 'calc(var(--base-font-size) * 1.875)',
        '4xl': 'calc(var(--base-font-size) * 2.25)',
        '5xl': 'calc(var(--base-font-size) * 3)',
        '6xl': 'calc(var(--base-font-size) * 3.75)',
        '7xl': 'calc(var(--base-font-size) * 4.5)',
        '8xl': 'calc(var(--base-font-size) * 6)',
        '9xl': 'calc(var(--base-font-size) * 8)',
      },
    },
  },
  plugins: [],
};

export default config;
