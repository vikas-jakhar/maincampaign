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
        'plex': "'IBM Plex Mono', monospace",
        'thicccboi-normal': "'THICCCBOI', sans-serif",
        'thicccboi-semiBold': "'THICCCBOI', sans-serif",
        'thicccboi-bold': "'THICCCBOI', sans-serif",
        'thicccboi-medium': "'THICCCBOI', sans-serif",
        'thicccboi-regular': "'THICCCBOI', sans-serif",
      },
      backgroundImage: {
        "linear-green": "linear-gradient(180deg, #88FFBF 0%, rgba(62, 254, 151, 0.17) 100%)"
      },
      colors: {
        'deep-blue': "#3B5998",
        'off-gray': "#7D889E",
        'light-gray': "#D9D9D9",
        'medium-gray': "#CECECE80",
        'off-white': "#FAF9F6",
        'off-red': "#FB5656",
        'light-green': "#88FFBF26",
        'off-green': "#30BD71",
        'light-pink': "#ED58BA26",
        'off-pink': "#ED58BA",
      },
      fontSize: {
        'custom-lg': "26px",
        'custom-xl': "32px",
      },
      boxShadow: {
        '3xl': "0px 10px 25px 0px #CECECE33",
        '4xl': "0px 4px 25px 0px #6D6D6D33",
      }
    },
  },
  plugins: [],
};
export default config;
