/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      keyframes: {
        'theme-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      animation: {
        'theme-spin': 'theme-spin 0.6s ease-in-out',
      },
    },
  },
  plugins: [
    // Typography components
    function ({ addComponents }) {
      addComponents({
        "h1": {
          "@apply font-serif font-normal text-3xl": {},
        },
        "h2": {
          "@apply font-serif font-normal text-xl mb-4": {},
        },
        "h3": {
          "@apply font-medium text-base": {},
        },
        "p": {
          "@apply leading-relaxed mb-4": {},
        },
        "ul": {
          "@apply list-disc pl-6 space-y-2": {},
        },
        "li": {
          "@apply leading-relaxed": {},
        },
        "blockquote": {
          "@apply italic text-muted-foreground": {},
        },
        "a": {
          "@apply text-blue-600 no-underline hover:underline": {},
        }
      });
    },
    // Base styles and CSS variables
    function ({ addBase }) {
      addBase({
        ':root': {
          '--background': '0 0% 100%',
          '--foreground': '0 0% 9%',
          '--muted': '0 0% 96%',
          '--muted-foreground': '0 0% 45%',
          '--border': '0 0% 90%',
          '--accent': '0 0% 96%',
          '--accent-foreground': '0 0% 9%',
          '--primary': '0 0% 15%',
          '--primary-foreground': '0 0% 98%',
        },
        '.dark': {
          '--background': '215 16% 9%',
          '--foreground': '215 8% 98%',
          '--muted': '215 12% 15%',
          '--muted-foreground': '215 8% 63%',
          '--border': '215 12% 15%',
          '--accent': '215 12% 15%',
          '--accent-foreground': '215 8% 98%',
          '--primary': '210 15% 85%',
          '--primary-foreground': '215 16% 9%',
        },
        'html': {
          'scroll-behavior': 'smooth',
        },
        'body': {
          '-webkit-overflow-scrolling': 'touch',
        },
        '*': {
          'outline': 'none',
        },
        'button': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '@media (prefers-reduced-motion: reduce)': {
          'html': {
            'scroll-behavior': 'auto',
          },
          '*, *::before, *::after': {
            'animation-duration': '0.01ms !important',
            'animation-iteration-count': '1 !important',
            'transition-duration': '0.01ms !important',
            'scroll-behavior': 'auto !important',
          },
        },
      });
    },
  ],
};
