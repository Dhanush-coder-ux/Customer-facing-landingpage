export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FDFBF7",
        hero: "#FDFBF7",
        primary: {
          DEFAULT: "#F97316",
          dark: "#C2410C",
          light: "#FB923C",
        },
        highlight: "#FFEDD5",
        accent: "#EA580C",
        ink: "#1C1917",
        outline: "#E7E5E4",
        milk: {
          DEFAULT: "#FFFDF9",
          soft: "#F8F5EE",
          warm: "#F5EFE6",
        },
      },
      fontFamily: { sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } } },
      animation: { float: "float 5s ease-in-out infinite" },
    },
  },
};
