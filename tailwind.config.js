/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F8F4EC',
          200: '#F1E9DC',
          300: '#E8DED1',
          400: '#D5C9B8',
        },
        orange: {
          primary: '#D97736',
          secondary: '#E9A66F',
          light: '#FBE8D8',
          dark: '#B85E1E',
        },
        charcoal: {
          DEFAULT: '#292522',
          light: '#3D3733',
        },
        muted: '#77716A',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'count-up': 'countUp 2s ease forwards',
        'circuit': 'circuit 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        circuit: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'card': '0 2px 20px rgba(41, 37, 34, 0.08)',
        'card-hover': '0 8px 40px rgba(217, 119, 54, 0.15)',
        'orange': '0 4px 20px rgba(217, 119, 54, 0.3)',
      },
    },
  },
  plugins: [],
}

