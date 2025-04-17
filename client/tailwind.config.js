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
      },
      animation: {
        slide: 'slide 15s linear infinite',          // Use in className as animate-slide
        spinCarousel: 'spinCarousel 40s linear infinite', // Optional 3D carousel animation
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], // Use className="font-dancing"
      },
      perspective: {
        // 👁️ Optional custom utility (use via className if needed)
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
