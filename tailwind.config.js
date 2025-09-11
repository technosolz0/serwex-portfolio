/** @type {import('tailwindcss').Config} */
import { primaryColor, secondaryColor, tertiaryColor, accentColor, backgroundLight, textDark } from "./src/lib/theme/colors"

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
          colors: {
            primary: primaryColor,
            secondary: secondaryColor,
            tertiary: tertiaryColor,
            accent: accentColor,
            'bg-light': backgroundLight,
            'text-dark': textDark,
          },
          backgroundImage: {
            "gradient-primary": `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            "gradient-accent": `linear-gradient(to bottom, ${accentColor}, ${tertiaryColor})`,
          },
          boxShadow: {
            'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'glow': '0 0 15px rgba(250, 201, 78, 0.5)', // Glow effect for primary color
          },
          transitionProperty: {
            'height': 'height',
            'spacing': 'margin, padding',
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out',
            'slide-up': 'slideUp 0.7s ease-out',
            'bounce': 'bounce 1s infinite',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            bounce: {
              '0%, 100%': { transform: 'translateY(-5%)' },
              '50%': { transform: 'translateY(0)' },
            },
          },
        },
  },
  plugins: [],
}

