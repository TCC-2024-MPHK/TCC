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

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      tr: '.625rem'
    },

    fontFamily: {
      'rem': '"REM"',
      'aleo': '"Aleo"',
      'patua-one': '"Patua One"',
    },

    extend: {
      inset: {
        '20p': '5%',
        '40p': '27.5%',
        
      }
    }
  },
  

  plugins: [],
}

