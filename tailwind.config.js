/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'terminal-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: { 'terminal-float': 'terminal-float 5s ease-in-out infinite' },
      colors: {
        canvas: '#090D16',
        surface: '#101725',
        cyan: '#00E5F5',
        purple: '#8651FF',
        muted: '#94A3B8',
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
      boxShadow: { glow: '0 0 42px rgba(0,229,245,.18)' },
    },
  },
  plugins: [],
}
