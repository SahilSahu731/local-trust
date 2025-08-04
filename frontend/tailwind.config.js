/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode with a "dark" class
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // Blue-500
          dark: '#1E40AF',  // Blue-900
        },
        secondary: {
          light: '#FBBF24', // Amber-400
          dark: '#92400E',  // Amber-900
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        card: {
          light: '#F3F4F6',
          dark: '#1F2937',
        },
        text: {
          light: '#111827',
          dark: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
};
