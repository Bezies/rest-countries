/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: {
          50: "#f5f8fa",
          100: "#eaeff4",
          200: "#d0dde7",
          300: "#a8c1d1",
          400: "#789fb8",
          500: "#5783a0",
          600: "#446a85",
          700: "#38566c",
          800: "#31495b",
          900: "#2d3e4d",
          950: "#202c37",
        },
        "oxford-blue": {
          50: "#f2f8f9",
          100: "#deebef",
          200: "#c1d7e0",
          300: "#95bacb",
          400: "#6395ad",
          500: "#477a93",
          600: "#3e647c",
          700: "#375367",
          800: "#334757",
          900: "#2b3945",
          950: "#1b2731",
        },
      },
    },
  },
  plugins: [],
};
