/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        link: {
          DEFAULT: '#2563eb',
          hover: '#1e40af',
        },
        content: {
          DEFAULT: '#111827',
          secondary: '#374151',
          tertiary: '#4b5563',
          muted: '#6b7280',
          subtle: '#4b5563',
        },
        border: {
          DEFAULT: '#e5e7eb',
          hover: '#d1d5db',
        },
        surface: {
          DEFAULT: '#f9fafb',
          secondary: '#f3f4f6',
        },
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
          "@apply italic text-content-subtle": {},
        },
        "a": {
          "@apply text-link no-underline hover:underline hover:text-link-hover": {},
        }
      });
    },
  ],
};
