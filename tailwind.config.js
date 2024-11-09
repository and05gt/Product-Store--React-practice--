/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FD9222",
        beige: "#FCF1E0",
        violet: "#1E1823",
        white: "#FAFAFA",
        gray: "#4C4C4C",
        black: "#111111",
      },
    },
  },
  plugins: [require("daisyui")],
};
