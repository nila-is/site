/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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
          "@apply italic text-gray-600": {},
        },
        "a": {
          "@apply text-blue-600 hover:text-blue-800 transition-colors": {},
        }
      });
    },
  ],
};
