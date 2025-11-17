module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "matte-sky": "#8EC5FF",
        "matte-sky-2": "#66B2FF",
        "navy-dark": "#0B2340",
        "navy-deep": "#071029",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
