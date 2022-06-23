module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#FF481A",
        secondary: "#FFFFFF",
        tertiary: "#0e0e0e",
      },
    },
    fontFamily: {
      hind: ["hind", "san-serif"],
      hindBold: ["hindBold", "san-serif"],
    },
  },
  plugins: [],
};
