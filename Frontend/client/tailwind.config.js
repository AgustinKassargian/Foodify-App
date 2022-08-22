/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      colors: {
        textColor: '#515151',
        primary: '#f5f3f3',
        naranja: '#FFA055',
        cardOverlay: 'rgba(256,256,256,0.4)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


