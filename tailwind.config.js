/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1320px',
    },
    extend: {},
  },
  plugins: ["prettier", "prettier-plugin-tailwindcss"]
}