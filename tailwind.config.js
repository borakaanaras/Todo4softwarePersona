/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode vurgu: amber tonları
        dark: {
          bg: '#18181b',
          surface: '#27272a',
          border: '#3f3f46',
          muted: '#71717a',
        },
      },
    },
  },
  plugins: [],
}
