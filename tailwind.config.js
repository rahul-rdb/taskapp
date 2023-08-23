/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{js,html}","./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eggWhite: "#f0f2f6",
      },
    },
  },
  plugins: [],
};
