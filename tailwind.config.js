/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {fontFamily: {
        // We'll name it `main` (you can name it anything)
        test: ["'Grechen Fuemen'", "sans-serif"],
        lato: ["'Lato'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
}

