import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut1: {
          '0%': { opacity: '0' },
          '0%, 33.33%': { opacity: '1' },
          '33.34%, 100%': { opacity: '0' },
        },
        fadeInOut2: {
          '0%, 33.33%': { opacity: '0' },
          '33.34%, 66.66%': { opacity: '1' },
          '66.67%, 100%': { opacity: '0' },
        },
        fadeInOut3: {
          '0%, 66.66%': { opacity: '0' },
          '66.67%, 100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOut1: 'fadeInOut1 6s forwards',
        fadeInOut2: 'fadeInOut2 6s forwards',
        fadeInOut3: 'fadeInOut3 6s forwards',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "lofi",
    "forest",],
  },
} satisfies Config;