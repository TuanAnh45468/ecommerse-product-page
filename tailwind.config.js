/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: 'hsl(0, 0%, 0%)'
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}

