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
          "@apply text-primary no-underline hover:underline": {},
        }
      });
    },
  ],
};
