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
    fontSize: {
      xs: '.6rem',
      sm: '0.8rem',
      base: '1rem',
      md: '1.25',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
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
          DEFAULT: '.5rem',
          sm: '.5rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    //add screen to match container sizes
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  corePlugins: {
    container: false
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
        'p':  {fontSize: theme('fontSize.sm') },
      })
    }),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
          '@screen 2xl': {
            maxWidth: '1600px',
          },
        }
      })
    }
  ]
}

