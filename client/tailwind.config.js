/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '320px', // Custom extra-extra-small breakpoint
      xs: '360px', // Custom extra small breakpoint
      sm: '640px', // Default Tailwind breakpoint
      md: '768px', // Default Tailwind breakpoint
      lg: '1024px', // Default Tailwind breakpoint
      xl: '1280px', // Default Tailwind breakpoint
    },
    extend: {
      fontFamily: {
        primary: ['Geist', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
        tertiary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        quantDark: '#121212',
        quantHighlight: '#a272ff',
        quantGray: '#f5f5f5',
      },
    },
  },

  plugins: [],
};
