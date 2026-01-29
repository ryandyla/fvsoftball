/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {    colors: {
      brand: {
        surface: "#f1f1ef",
      },
    },} },
  plugins: [],
}

