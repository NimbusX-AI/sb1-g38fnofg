/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#635BFF',
        accent: '#00D4FF'
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif']
      }
    }
  },
  plugins: []
};