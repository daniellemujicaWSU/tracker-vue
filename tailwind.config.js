/** @type {import('tailwindcss').Config} */
export const purge = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const content = [];
export const theme = {
  extend: {
    colors: {
      'pacific-blue': '#7093E3',
      'everett': '#769183',
      'spokane': '#C8B2D6',
      'tricities': '#A09E6A',
      'vancouver': '#40BCC1',
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
};

import plugin from 'tailwindcss/plugin'
export const plugins = [
  plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.2xl') },
      'h2': { fontSize: theme('fontSize.xl') },
      'h3': { fontSize: theme('fontSize.lg') },
    })
  })
];  

