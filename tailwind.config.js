/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom theme colors if needed, e.g., for the specified palette
      colors: {
        primary: {
          DEFAULT: "#0B132B", // Example: Dark Blue
          light: "#1C2541"  // Example: Slightly lighter dark blue
        },
        secondary: "#3A506B", // Example: Steel Blue
        accent: {
          DEFAULT: "#FFD700", // Example: Gold
          hover: "#E6C200" // Example: Darker Gold
        },
        background: {
          light: "#F8F9FA", // Off-white
          dark: "#0B132B" // Dark Blue
        },
        text: {
          light: "#212529", // Dark Gray
          dark: "#E9ECEF" // Light Gray
        }
      },
      fontFamily: {
        // Assuming Inter and Poppins are imported via CSS or CDN
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
