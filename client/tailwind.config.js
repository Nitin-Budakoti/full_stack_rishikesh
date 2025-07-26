/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
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
        // ✨ Shimmer effect for cards and buttons
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // 🔄 Pulse animation for attention
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        // 🌊 Wave animation for water effects
        wave: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',          // For continuous sliders
        spinCarousel: 'spinCarousel 40s linear infinite', // Optional 3D carousel animation
        ripple: 'ripple 3s linear infinite',          // For boat water ripple effect
        shimmer: 'shimmer 3s ease-in-out infinite',   // For shimmering effects
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // For pulsing elements
        wave: 'wave 3s ease-in-out infinite',         // For wave effects
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], // Use className="font-dancing"
        poppins: ['Poppins', 'sans-serif'],       // Modern, clean font
        playfair: ['"Playfair Display"', 'serif'], // Elegant serif font
      },
      perspective: {
        '1000': '1000px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(66, 153, 225, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(66, 153, 225, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
