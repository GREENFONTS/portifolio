//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mypalegreen: "#876D2E",
        darkblue: "#325B77",
      },
      backgroundImage: {
        hero: "url('/MyPic.jpg')",
      },
      screens: {
        xs:"200px",
        sm: "481px",

        md: "769px",

        lg: "1025px",
        xl: "1201px",
      
      },
    },
  },
  plugins: [],
};
