/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f98125",
        secondary: "#64748b",
        dark: "#11224d",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
