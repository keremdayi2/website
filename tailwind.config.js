/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {fontFamily: { 
        test: ["'Grechen Fuemen'", "sans-serif"],
        lato: ["'Lato'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
}

