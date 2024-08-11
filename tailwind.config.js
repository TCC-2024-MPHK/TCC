/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bege': '#F4F1EA',
      'verde-claro': '#B0D182',
      'text-preto': '#1F1F1F',
      'text-branco': '#F7FEFB',
      'verde-header': '#6A8E4E',
    },

    fontFamily: {
      'rem': '"REM"',
      'aleo': '"Aleo"',
      'patua-one': '"Patua One"',
    }
  },

  plugins: [],
}

