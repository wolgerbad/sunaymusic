/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js}",
    "./src/app/**/*.{ts,tsx,js}",
    "./app/**/*.{ts,tsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-space)', 'ui-monospace', 'SFMono-Regular'],
      }
    }
  },
  plugins: [],
}
