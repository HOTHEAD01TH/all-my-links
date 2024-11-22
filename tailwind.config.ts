import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'border': 'border 4s ease infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'blink': 'blink 1s step-end infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'glitch': 'glitch 500ms infinite',
        'glitch-2': 'glitch-2 750ms infinite',
        'deform': 'deform 200ms ease-in-out infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'deform': {
          '0%': {
            transform: 'scale(1) skewX(0deg)',
          },
          '25%': {
            transform: 'scale(1.02) skewX(2deg)',
          },
          '50%': {
            transform: 'scale(0.98) skewX(-2deg)',
          },
          '75%': {
            transform: 'scale(1.02) skewX(2deg)',
          },
          '100%': {
            transform: 'scale(1) skewX(0deg)',
          },
        },
        'glitch': {
          '0%, 100%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(45deg)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(-45deg)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(45deg)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(-45deg)',
          },
        },
        'glitch-2': {
          '0%, 100%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': {
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(-45deg)',
          },
          '40%': {
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(45deg)',
          },
          '60%': {
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(-45deg)',
          },
          '80%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(45deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config