/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-modal': 'rgba(255,255,255,.3)',
      },
    },
  },
  plugins: [],
};
