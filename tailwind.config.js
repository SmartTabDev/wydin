/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'sm': '0 2px 5px #9BB1A180',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
