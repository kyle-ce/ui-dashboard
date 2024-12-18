/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode via a class (default is 'media' which uses prefers-color-scheme)
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: "#00695c", // Dark Teal
        secondary: "#26a69a", // Light Teal
        surface: "#f5f5f5", // Light Gray
        onSurface: "#fff", // White
        background: "#f0f0f0", // Light Background
        text: "#333333", // Dark Text
        textSecondary: "#fff", // White Text for headers/footers
        accent: "#ff4081", // Accent Color

        // Dark Mode Colors
        darkPrimary: "#005f56", // Deep Teal for Primary Elements
        darkSecondary: "#217d74", // Subdued Teal for Highlights
        darkBackground: "#212121", // Dark background
        darkSurface: "#2f2f2f", // Dark surface for cards/sections
        onDarkSurface: "#0d0d0d", // Almost Black
        darkText: "#ececec", // Main Text Color
        darkTextSecondary: "#a8a8a8", // Neutral Gray for Secondary Text
        darkAccent: "#ff79a1", // Accent color for both modes
      },
    },
  },
  plugins: [],
};
