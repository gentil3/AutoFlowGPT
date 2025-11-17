/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 45px rgba(15, 23, 42, 0.20)"
      },
      colors: {
        dark: "#020617",
        gray: "#6b7280"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
