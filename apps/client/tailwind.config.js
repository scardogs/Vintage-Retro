/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2F2213',
        'sepia-900': '#6B4E2E',
        'sepia-700': '#8C6A3B',
        'sepia-500': '#B0895E',
        'cream-200': '#E7D9C9',
        'cream-50': '#F6F0E6',
        olive: '#6D8A57',
        burgundy: '#7A3E3E',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Source Serif 4', 'serif'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
      },
      borderRadius: {
        'card': '10px',
        'button': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 240ms cubic-bezier(0.22, 0.55, 0.25, 0.95)',
        'slide-up': 'slideUp 240ms cubic-bezier(0.22, 0.55, 0.25, 0.95)',
        'scale-in': 'scaleIn 160ms cubic-bezier(0.22, 0.55, 0.25, 0.95)',
        'grain-hover': 'grainHover 160ms ease-in-out',
        'button-press': 'buttonPress 160ms ease-in-out',
        'flip-card': 'flipCard 240ms cubic-bezier(0.22, 0.55, 0.25, 0.95)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        grainHover: {
          '0%': { filter: 'contrast(1) brightness(1)' },
          '100%': { filter: 'contrast(1.06) brightness(1.02)' },
        },
        buttonPress: {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.98)' },
          '100%': { transform: 'scaleY(1)' },
        },
        flipCard: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(8deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
      boxShadow: {
        'letterpress': '0 1px 2px rgba(47, 34, 19, 0.12)',
        'card': '0 4px 6px -1px rgba(47, 34, 19, 0.1), 0 2px 4px -1px rgba(47, 34, 19, 0.06)',
        'button': '0 2px 4px rgba(47, 34, 19, 0.1)',
      },
    },
  },
  plugins: [],
}

