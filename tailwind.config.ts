import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#4f46e5',
        dark: '#111827',
        'dark-lighter': '#1f2937',
        light: '#ffffff',
        'light-darker': '#f3f4f6'
      }
    }
  },
  plugins: [],
} satisfies Config