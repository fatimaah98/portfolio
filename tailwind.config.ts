import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#030213',
        secondary: '#4f46e5',
        dark: '#111827',
        'dark-lighter': '#1f2937',
        light: '#ffffff',
        'light-darker': '#f3f4f6',
        'muted-foreground': '#717182',
        foreground: 'oklch(0.145 0 0)',
        accent: '#e9ebef',
        destructive: '#d4183d'
      }
    }
  },
  plugins: [],
} satisfies Config