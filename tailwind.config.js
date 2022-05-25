module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors bases
      colors: {
        blue: "#0154AB",
        orange: "#F26522",
        black: "#131415",
        gray: "#D6D6D6",
      },

      // font family bases
      fontFamily: {},

      // keyframes custom
      keyframes: {
        rotateRight: {
          "0%": { transform: "rotate(0deg)", opacity: 0 },
          "50%": { transform: "rotate(360deg)", opacity: 1 },
          "100%": { transform: "rotate(360deg)", opacity: 1 },
        },
        rotateLeft: {
          "0%": { transform: "rotate(360deg)", opacity: 0 },
          "50%": { transform: "rotate(0deg)", opacity: 1 },
          "100%": { transform: "rotate(0deg)", opacity: 1 },
        },
        navigationShowing: {
          "0%": { opacity: 0, top: "-5em" },
          "100%": { opacity: 1, top: 0 },
        },
        drawerMenuShowwing: {
          "0%": { opacity: "0", right: "-5em" },
          "100%": { opacity: "1", right: "0em" },
        },
      },

      // animation custom
      animation: {
        rotateRight: "rotateRight 1s ease-in-out",
        rotateLeft: "rotateLeft 1s ease-in-out",
        navigationShowing: "navigationShowing 0.3s ease-in-out",
        drawerMenuShowwing: "drawerMenuShowwing 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
