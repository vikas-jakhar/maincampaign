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
        'deep-blue': "#3B5998",
        'off-gray': "#7D889E",
        'light-gray': "#D9D9D9",
        'medium-gray': "#CECECE80",
        'off-white': "#FAF9F6",
        'off-red': "#FB5656",
      },
      fontSize: {
        'custom-xl': "32px",
      },
    },
  },
  plugins: [],
};
export default config;
