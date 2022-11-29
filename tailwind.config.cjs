/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"]
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
