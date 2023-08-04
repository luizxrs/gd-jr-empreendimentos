/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    animation: ["motion-safe"],
  },
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      keyframes: {
        slideRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-36rem * 4))" },
        },
        slideLeft: {
          from: { transform: "translateX(calc(-36rem * 4))" },
          to: { transform: "0" },
        },
        slideUp: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-50%)" },
        },
        slideDown: {
          from: { transform: "translateY(-50%)"},
          to: {  transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideRight: "slideRight 60s infinite linear",
        slideLeft: "slideLeft 60s infinite linear",
        slideUp: "slideUp 60s infinite linear",
        slideDown: "slideDown 60s infinite linear",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Primary: {
          100: "#EDCF75",
          200: "#F5DF9D",
          300: "#BC9C57",
          400: "#62502c",
        },
        backgroundColor: {
          100: "#323538",
        },
      },
    },
    plugins: [],
  },
};
