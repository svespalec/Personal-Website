/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#13151a',
        muted: '#27272a',
        primary: '#3f3f46',
      },
    },
  },
  plugins: [],
}