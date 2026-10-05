import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#161C20',
        brand: '#1A8F3C',
        'brand-deep': '#0E6B2A',
        surface: '#F3F5F4',
        muted: '#6B7378',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        crisp: '0 16px 40px rgba(22, 28, 32, 0.12)',
      },
      borderRadius: {
        brand: '8px',
      },
    },
  },
  plugins: [],
} satisfies Config
