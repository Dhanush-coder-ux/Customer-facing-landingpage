export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FCFCF8",
        hero: "#FCFCF8",
        primary: {
          DEFAULT: "#286038",
          dark: "#103020",
        },
        highlight: "#88B878",
        accent: "#C49850",
        ink: "#172019",
        outline: "#DDE5DC",
      },
      fontFamily: { sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } } },
      animation: { float: "float 5s ease-in-out infinite" },
    },
  },
};
