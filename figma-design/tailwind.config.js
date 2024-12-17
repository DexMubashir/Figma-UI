module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_7f": "var(--black_900_7f)",
          "900_b2": "var(--black_900_b2)",
        },
        deep_purple: { 900: "var(--deep_purple_900)" },
        gray: {
          200: "var(--gray_200)",
          600: "var(--gray_600)",
          "200_01": "var(--gray_200_01)",
        },
        light_blue: { 800: "var(--light_blue_800)" },
        orange: { 300: "var(--orange_300)" },
        purple: { 400: "var(--purple_400)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: { merriweathersans: "Merriweather Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
