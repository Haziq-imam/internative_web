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
          DEFAULT: 'var(--bg-main)',
          secondary: 'var(--bg-card)',
          tertiary: '#070707ff', // Keep for deep contrast if needed
          surface: 'var(--bg-surface)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          hover: '#9333EA',   // More vibrant purple
          light: 'var(--text-muted)',
          glow: 'rgba(168, 85, 247, 0.5)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: '#DB2777',
        },
        accent: {
          purple: 'var(--primary)',
          blue: '#3B82F6',
          cyan: 'var(--accent-cyan)',
          green: '#10B981',
          red: '#EF4444',
          gold: '#F59E0B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        text: {
          primary: 'var(--text-heading)',
          main: 'var(--text-main)',
          secondary: 'var(--text-muted)',
          muted: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'rgba(168, 85, 247, 0.1)', // Subtle purple tint in border
          hover: 'rgba(168, 85, 247, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        'brand-gradient-vibrant': 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)', // Hard neon
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'card-gradient': 'linear-gradient(180deg, #0F0924 0%, #060410 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(168, 85, 247, 0.3)',
        'neon-hover': '0 0 40px rgba(168, 85, 247, 0.6)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
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
