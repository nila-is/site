/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "h1": {
          "@apply font-bold text-lg": {},
        },
        "h2": {
          "@apply font-bold text-lg": {},
        },
        "h3": {
          "@apply font-semibold text-sm": {},
        },
        "p": {
          "@apply leading-relaxed mb-2": {},
        },
        "ul": {
          "@apply list-disc pl-6 space-y-1": {},
        },
        "li": {
          "@apply leading-relaxed": {},
        },
        "blockquote": {
          "@apply pl-4 border-l-2 border-gray-300": {},
        },
        "a": {
          "@apply text-blue-500 hover:text-blue-700 transition-colors duration-200": {},
        }
      });
    },
  ],
};
