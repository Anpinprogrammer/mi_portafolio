/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'terminal-bounce': {
          '0%, 100%': {
            transform: 'translate3d(0, -25%, 0)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translate3d(0, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: { 'terminal-bounce': 'terminal-bounce 1s infinite' },
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
