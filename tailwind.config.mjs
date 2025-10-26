/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        // Primary brand color - slate for cooler neutral tones
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Link color - used for all hyperlinks
        link: {
          DEFAULT: '#2563eb',  // default link color (blue-600)
          hover: '#1d4ed8',    // hover state (blue-700)
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
          "@apply italic text-slate-600": {},
        },
        "a": {
          "@apply text-link no-underline hover:underline hover:text-link-hover": {},
        }
      });
    },
  ],
};
