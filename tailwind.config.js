/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4ffe6',
          100: '#e6ffc7',
          200: '#ceff94',
          300: '#afff56',
          400: '#8aff1e',
          500: '#6de400',
          600: '#53b500',
          700: '#3f8903',
          800: '#346b09',
          900: '#2c590d',
          accent: '#CCFF00', // Iconic athletic neon volt
          dark: '#0B0D0E',
          card: '#121518',
          cardBorder: '#1E2328',
          subtle: '#8E9AA7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Impact', 'Inter', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
