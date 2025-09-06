import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#030213',
        secondary: 'oklch(0.95 0.0058 264.53)',
        dark: '#111827',
        'dark-lighter': '#1f2937',
        light: '#ffffff',
        'light-darker': '#f3f4f6',
        'muted-foreground': '#717182',
        foreground: 'oklch(0.145 0 0)',
        accent: '#e9ebef',
        destructive: '#d4183d',
        'primary-foreground': 'oklch(1 0 0)',
        'secondary-foreground': '#030213',
        'accent-foreground': '#030213',
        'destructive-foreground': '#ffffff',
      }
    }
  },
  plugins: [],
} satisfies Config