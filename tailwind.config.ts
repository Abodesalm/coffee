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
      'xl': {'max':'1300px'},  // DONE
      'lg': {'max':'1024px'}, // DONE
      'md': {'max':'720px'},
      'sm': {'max':'500px'}
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
