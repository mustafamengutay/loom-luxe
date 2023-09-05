/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1320px',
    },
    extend: {
      colors: {
        white: '#F8F9FA',
        black: '#212529',
      },
      spacing: {
        '7.5': '1.875rem',
      },
      fontSize: {
        base: '0.875rem',
      }
    },
  },
  plugins: ["prettier", "prettier-plugin-tailwindcss"]
}