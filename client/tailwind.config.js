/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      keyframes: {
        // 🔁 Smooth horizontal sliding animation
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // 🔄 Optional 3D carousel spin animation
        spinCarousel: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        // 🌊 Ripple effect under the boat
        ripple: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.1)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',          // For continuous sliders
        spinCarousel: 'spinCarousel 40s linear infinite', // Optional 3D carousel animation
        ripple: 'ripple 3s linear infinite',          // For boat water ripple effect
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], // Use className="font-dancing"
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
