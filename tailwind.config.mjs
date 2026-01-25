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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "h1": {
          "@apply font-serif font-normal text-3xl tracking-tight": {},
        },
        "h2": {
          "@apply font-serif font-normal text-xl tracking-tight": {},
        },
        "h3": {
          "@apply font-medium text-base": {},
        },
        "p": {
          "@apply leading-relaxed": {},
        },
        "ul": {
          "@apply list-disc pl-6 space-y-1.5": {},
        },
        "li": {
          "@apply leading-relaxed": {},
        },
        "blockquote": {
          "@apply italic": {},
        },
        "a": {
          "@apply text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors": {},
        }
      });
    },
    function ({ addBase }) {
      addBase({
        ':root': {
          '--background': '0 0% 100%',
          '--foreground': '0 0% 9%',
          '--muted': '0 0% 96%',
          '--muted-foreground': '0 0% 45%',
        },
        '.dark': {
          '--background': '220 15% 10%',
          '--foreground': '220 10% 98%',
          '--muted': '220 12% 15%',
          '--muted-foreground': '220 10% 60%',
        },
        'html': {
          'scroll-behavior': 'smooth',
        },
        'body': {
          '-webkit-overflow-scrolling': 'touch',
        },
      });
    },
  ],
};
