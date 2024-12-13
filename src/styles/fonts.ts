import localFont from 'next/font/local'

export const eurostile = localFont({
  src: [
    {
      path: '../../public/fonts/Eurostile.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Eurostile-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Eurostile-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    // Add other weights/styles if you have them
  ],
  variable: '--font-eurostile',
  display: 'swap',
  preload: true,
  adjustFontFallback: false, // Try toggling this if spacing is still off
  // Add font features to match Adobe's settings
  declarations: [
    { prop: 'font-feature-settings', value: '"kern" 1' },
    { prop: 'text-rendering', value: 'optimizeLegibility' },
    { prop: 'font-smooth', value: 'always' },
    { prop: '-webkit-font-smoothing', value: 'antialiased' },
    { prop: '-moz-osx-font-smoothing', value: 'grayscale' },
  ]
})

export const newAstro = localFont({
   src: [
     {
       path: '../../public/fonts/New-Astro-Soft-Regular.otf',
       weight: '400',
       style: 'normal',
     },
     {
       path: '../../public/fonts/New-Astro-Soft-Bold.otf',
       weight: '700',
       style: 'normal',
     },
     // Add other weights/styles if you have them
   ],
   variable: '--font-new-astro-soft',
   display: 'swap',
   preload: true,
   adjustFontFallback: false, // Try toggling this if spacing is still off
   // Add font features to match Adobe's settings
   declarations: [
     { prop: 'font-feature-settings', value: '"kern" 1' },
     { prop: 'text-rendering', value: 'optimizeLegibility' },
     { prop: 'font-smooth', value: 'always' },
     { prop: '-webkit-font-smoothing', value: 'antialiased' },
     { prop: '-moz-osx-font-smoothing', value: 'grayscale' },
   ]
 })