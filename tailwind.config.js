/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-desktop": "url(../src/assets/desktop/image-hero.jpg)",
        "hero-image-mobile": "url(../src/assets/mobile/image-hero.jpg)",
      },
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {},
  },
  plugins: [],
};
