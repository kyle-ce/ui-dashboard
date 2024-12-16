/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode via a class (default is 'media' which uses prefers-color-scheme)
  theme: {
    extend: {
      colors: {
        primary: "#00695c", // Dark Teal (light mode)
        secondary: "#26a69a", // Light Teal (light mode)
        surface: "#f5f5f5", // Light Gray (for cards and surfaces in light mode)
        onSurface: "#fff", // Contrast lighter than surface

        // Dark Mode Colors
        darkBackground: "#121212", // Dark background for dark mode
        darkSurface: "#1e1e1e", // Dark surface for cards or sections in dark mode
        darkText: "#fff", // Light text color for dark mode
        darkTextLight: "#b0b0b0", // Lighter text for secondary elements in dark mode

        background: "#f0f0f0", // Light background (light mode)
        text: "#333333", // Dark text (light mode)
        textLight: "#fff", // White text for light mode (headers, footers, etc.)
        border: "#e0e0e0", // Light border color for light mode
        accent: "#ff4081", // Accent color (can remain constant for both modes)
      },
    },
  },
  plugins: [],
};
