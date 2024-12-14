/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".markdown": {
          h1: {
            "@apply text-xl font-bold mb-4": {},
          },
          h2: {
            "@apply text-lg font-bold mt-8 mb-4": {},
          },
          p: {
            "@apply mb-4": {},
          },
          ul: {
            "@apply list-disc pl-6 mb-4": {},
          },
          li: {
            "@apply mb-2": {},
          },
          pre: {
            "@apply bg-gray-50 p-4 mb-4 overflow-auto rounded-md": {},
          },
          code: {
            "@apply text-xs": {},
          },
          a: {
            "@apply text-blue-500 underline hover:text-blue-600": {},
          },
        },
      });
    },
  ],
};
