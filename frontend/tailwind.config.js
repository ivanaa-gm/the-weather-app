/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'],
        redhat: ['"Red Hat Display"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
