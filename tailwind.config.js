/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar');
module.exports = {
  content: [
    "./index.html",,
    "./works.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': '"Lato", sans-serif',
        'Orbitron' : '"Orbitron", sans-serif',
        'Oxanium': '"Oxanium", sans-serif'
      },
      colors: {
        "accent-color": "hsl(47, 100%, 50%)",
        "primary-white": "hsl(0, 0%, 90%)",
        "paragraph": "hsl(0, 0%, 70%)",
        "light-black": "hsl(0, 0%, 5%)",
        "dark-yellow": "hsla(45, 100%, 50%, 80%)",
        'dark-gray': 'hsl(0, 0%, 28%)'
      },
      backgroundImage: {
        'home-mobile-hero': "url('./images/mobile/mobile-hero.png')",
        'home-desktop-hero': "url('./images/desktop/Hero-desktop.png')",

        'contact-desktop-hero': "url('./src/images/desktop/contact-hero.png')",
        'contact-mobile-hero': "url('./src/images/mobile/mobile-contact-hero.png')",
        
        'work-desktop-hero': "url('./images/desktop/contact-hero.png')",
        'work-mobile-hero': "url('./images/mobile/mobile-works-hero.png')",
        
        
      },
      width: {
        '9/20': '45%',
        '98': '25rem',
        '100': '30rem'

      }, 
      height:{
        '46': '11.25rem',
        '68': '16.875rem', 
        '58': '14.063rem',
        
      }
      
    },
  },
  plugins: [
    plugin({ nocompatible: true }),
  ],
}