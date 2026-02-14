/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a000eff', // Deep Navy/Slate
          secondary: '#2d0b31ff', // Lighter Navy
          tertiary: '#070707ff', // Card background
          surface: '#374151', // Elevate surface
        },
        primary: {
          DEFAULT: '#550B77', // Deep Purple
          hover: '#6D28D9',   // Violet-600
          light: '#A78BFA',   // Violet-400
          glow: 'rgba(85, 11, 119, 0.5)'
        },
        secondary: {
          DEFAULT: '#FF5500', // Orange (Current primary as accent)
          hover: '#FF6A00',
        },
        accent: {
          purple: '#550B77',
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
          gold: '#F59E0B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF', // Gray-400
          muted: '#6B7280',     // Gray-500
        },
        border: {
          DEFAULT: '#1F2937', // Gray-800
          hover: '#374151',   // Gray-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #550B77 0%, #7C3AED 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'card-gradient': 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(85, 11, 119, 0.15) 0%, transparent 50%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 85, 0, 0.2)',
        'neon-hover': '0 0 30px rgba(255, 85, 0, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'card': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scroll': 'scroll 30s linear infinite',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
