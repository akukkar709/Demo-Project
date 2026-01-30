/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E64A4A',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#7BDFD7',
          dark: '#3AB8B0',
        },
        dark: '#1a1a1a',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
