module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'focus', 'active', 'hover'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['night', 'cupcake'],
    darkTheme: 'night',
  },
}
