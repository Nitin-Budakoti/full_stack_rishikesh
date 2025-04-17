/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Ensure Tailwind scans these file types
  ],
  theme: {
    extend: {
      keyframes: {
        // Horizontal slider animation
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // 3D carousel spinner animation
        spinCarousel: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
        spinCarousel: 'spinCarousel 40s linear infinite',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], // Custom font for Dancing Script
      },
      perspective: {
        // Optional: custom utility for perspective if needed via Tailwind class
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
