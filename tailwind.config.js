/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mtb: { max: '768px' }, //media max with for table 768px
      mmb: { max: '580px' }, // media max with for mobile 580px
    },
  },
  plugins: [],
};
