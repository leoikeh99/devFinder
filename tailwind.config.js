module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono"],
      },
      colors: {
        primary: "#0079FF",
        text1: "#2B3442",
        text2: "#4B6A9B",
        bg1: "#F6F8FF",
        bg2: "#FEFEFE",
        themeIcon: "#697C9A",
        danger: "#F74646",
        primary_d: "#0079FF",
        text1_d: "#FFFFFF",
        text2_d: "#FFFFFF",
        bg1_d: "#141D2F",
        bg2_d: "#1E2A47",
        themeIcon_d: "#FFFFFF",
      },
      width: {
        card: "730px",
      },
      boxShadow: {
        input: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567);",
      },
      screens: {
        screen1: "757px",
        screen2: "535px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
