/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
          colors: {
            'pacific-blue': '#7093E3',
            'everett': '#117A49',
            'spokane': '#C49FEE',
            'tricities': '#B8A067',
            'vancouver': '#40BCC1',
            'seafoam': '#42BA96'
          },
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '5': '5px',
          '6': '6px',
          '8': '8px',
        },
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '1rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          },
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
        },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.2xl'),
          fontWeight: 600
        },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'h5': {fontSize: theme('fontSize.md') },
        'p':  {fontSize: theme('fontSize.xs') },
      })
    })
  ]
}

