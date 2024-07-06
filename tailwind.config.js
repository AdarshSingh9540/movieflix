/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '::-webkit-scrollbar': { display: 'none' }, /* Hide scrollbar for Chrome, Safari, and Opera */
          'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
        },
      });
    },
  ],
};
