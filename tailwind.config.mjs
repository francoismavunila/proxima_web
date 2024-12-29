/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    colors: {
      primary: '#0e1525',
      secondary: '#319eae',
      accent: '#f5fdfc',
    },
  },
},
  plugins: [],
};

