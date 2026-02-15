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
          DEFAULT: '#020010', // Almost black, deep space purple
          secondary: '#0A051A', // Slightly lighter for cards
          tertiary: '#0F0924', // Even lighter for accents
          surface: '#150D2E', // Surface color
        },
        primary: {
          DEFAULT: '#8B5CF6', // Violet-500
          hover: '#7C3AED',   // Violet-600
          light: '#A78BFA',   // Violet-400
          glow: 'rgba(139, 92, 246, 0.5)'
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink-500
          hover: '#DB2777',   // Pink-600
        },
        accent: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
          green: '#10B981',
          red: '#EF4444',
          gold: '#F59E0B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        text: {
          primary: '#FFFFFF',
          main: '#E0E7FF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(139, 92, 246, 0.2)',
          highlight: 'rgba(139, 92, 246, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'brand-gradient-vibrant': 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)',
        'glass': 'linear-gradient(180deg, rgba(15, 10, 40, 0.6) 0%, rgba(10, 5, 25, 0.8) 100%)',
        'glass-hover': 'linear-gradient(180deg, rgba(20, 15, 50, 0.7) 0%, rgba(15, 10, 35, 0.9) 100%)',
        'card-gradient': 'linear-gradient(180deg, #0A051A 0%, #020010 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 92, 246, 0.15)',
        'neon-hover': '0 0 30px rgba(139, 92, 246, 0.3)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
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
