/** @type {import('tailwindcss').Config} */
import { colors } from './src/theme/colors';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',     // @media (min-width: 640px)
      'md': '768px',     // @media (min-width: 768px)
      'lg': '1024px',    // @media (min-width: 1024px)
      'xl': '1280px',    // @media (min-width: 1280px)
      '2xl': '1536px',   // @media (min-width: 1536px)
    },
    extend: {
      fontFamily: {
        eurostile: ['var(--font-eurostile)'],
        newAstro: ['var(--font-new-astro-soft)']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      zIndex: {
        '50': '50',
      },

      backgroundColor: {
        'base': colors.base.light,
        'dark-base': colors.base.dark
      },
      textColor: {
        'main': '#2d3748',
        'dark-main': 'text-blue-50',
        'dynamic-tertiary': 'var(--text-tertiary)',
        'dynamic-disabled': 'var(--text-disabled)',
      },
      borderColor: {
        'main': '#2d3748',
        'layer-5': colors.layer5.light,
        'layer-10': colors.layer10.light,
        'layer-20': colors.layer20.light,
        'layer-30': colors.layer30.light,
        'layer-40': colors.layer40.light,
        'layer-50': colors.layer50.light,
        'layer-60': colors.layer60.light,
        'layer-70': colors.layer70.light,
        'layer-80': colors.layer80.light,
        'layer-90': colors.layer90.light,
        'layer-95': colors.layer95.light,

        'dark-layer-5': colors.layer5.dark,
        'dark-layer-10': colors.layer10.dark,
        'dark-layer-20': colors.layer20.dark,
        'dark-layer-30': colors.layer30.dark,
        'dark-layer-40': colors.layer40.dark,
        'dark-layer-50': colors.layer50.dark,
        'dark-layer-60': colors.layer60.dark,
        'dark-layer-70': colors.layer70.dark,
        'dark-layer-80': colors.layer80.dark,
        'dark-layer-90': colors.layer90.dark,
        'dark-layer-95': colors.layer95.dark,
      },
      colors: {
        // Brand colors
        'base': colors.base.light,
        'dark-base': colors.base.dark,
        'none': 'rgba(0,0,0,0)',
        
        // Surface colors
        surface: {
          'layer-5': colors.layer5.light,
          'layer-10': colors.layer10.light,
          'layer-20': colors.layer20.light,
          'layer-30': colors.layer30.light,
          'layer-40': colors.layer40.light,
          'layer-50': colors.layer50.light,
          'layer-60': colors.layer60.light,
          'layer-70': colors.layer70.light,
          'layer-80': colors.layer80.light,
          'layer-90': colors.layer90.light,
          'layer-95': colors.layer95.light,
  
          'dark-layer-5': colors.layer5.dark,
          'dark-layer-10': colors.layer10.dark,
          'dark-layer-20': colors.layer20.dark,
          'dark-layer-30': colors.layer30.dark,
          'dark-layer-40': colors.layer40.dark,
          'dark-layer-50': colors.layer50.dark,
          'dark-layer-60': colors.layer60.dark,
          'dark-layer-70': colors.layer70.dark,
          'dark-layer-80': colors.layer80.dark,
          'dark-layer-90': colors.layer90.dark,
          'dark-layer-95': colors.layer95.dark,
        },
        
        // // Text colors
        // text: {
        //   light: colors.text.light,
        //   dark: colors.text.dark,
        // },
        
        // // Semantic colors
        // semantic: colors.semantic,
      },
      // Add opacity modifiers for dynamic colors
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '85': '0.85',
      },
    },
  },
  plugins: [],
};