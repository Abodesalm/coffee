import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm': {'max':'500px'},
      'md': {'max':'720px'},
      'lg': {'max':'1024px'}, // <services> , -navbar , <about> , faqs & auth heading , contact
      'xl': {'max':'1300px'}  // services , navbar , about
    },
    extend: {
      colors: {
        'back':'#1f150e',
        'upback':'#2c1f17',
        'main':'#b16755'
      },
    },
  },
  plugins: [],
};
export default config;
