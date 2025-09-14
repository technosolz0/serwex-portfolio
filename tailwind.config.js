/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors from globals.css
        'bg-light': '#f7fafc',
        'text-dark': '#2d3748',
        // Updated color palette to match globals.css yellow-based theme
        primary: {
          DEFAULT: '#FAC94E', // Primary color from globals.css
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FAC94E', // Matches --primary in globals.css
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        secondary: {
          DEFAULT: '#FACC59', // Matches .bg-gradient-secondary in globals.css
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#FACC59', // Matches globals.css
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        accent: {
          DEFAULT: '#EAB308', // Matches .bg-gradient-accent in globals.css
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#eab308',
          500: '#EAB308', // Matches globals.css
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        tertiary: {
          DEFAULT: '#FFD97C', // Matches .bg-gradient-secondary end color
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD97C', // Matches globals.css
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(250, 201, 78, 0.5)', // Matches globals.css
        'glow-yellow': '0 10px 25px -3px rgba(250, 201, 78, 0.4), 0 4px 6px -2px rgba(250, 201, 78, 0.3)', // Matches globals.css
        'glow-accent': '0 10px 25px -3px rgba(234, 179, 8, 0.4), 0 4px 6px -2px rgba(234, 179, 8, 0.3)', // Matches globals.css
        'glow-blue': '0 10px 25px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)', // Matches globals.css
        'glow-purple': '0 10px 25px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2)', // Matches globals.css
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 201, 78, 0.4)' }, // Matches globals.css
          '50%': { boxShadow: '0 0 40px rgba(250, 201, 78, 0.8)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #FAC94E, #EAB308)', // Matches globals.css
        'gradient-secondary': 'linear-gradient(135deg, #FACC59, #FFD97C)', // Matches globals.css
        'gradient-accent': 'linear-gradient(135deg, #EAB308, #FFD97C)', // Matches globals.css
        'gradient-warm': 'linear-gradient(135deg, #FAC94E, #EAB308 50%, #f59e0b)', // Matches globals.css
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Add custom utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #FAC94E, #EAB308)', // Matches globals.css
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(135deg, #FACC59, #FFD97C)', // Matches globals.css
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-warm': {
          background: 'linear-gradient(135deg, #FAC94E, #f59e0b)', // Matches globals.css
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-yellow': {
          background: 'rgba(250, 201, 78, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(250, 201, 78, 0.2)',
        },
        '.bg-grid-pattern': {
          'background-image': 
            'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          'background-size': '50px 50px',
        },
        '.btn-primary': {
          background: 'linear-gradient(135deg, #FAC94E, #EAB308)', // Matches globals.css
          color: '#1f2937', // Matches text-dark from globals.css
          padding: '12px 32px',
          'border-radius': '12px',
          'font-weight': '600',
          transition: 'all 0.3s ease',
          'box-shadow': '0 4px 15px rgba(250, 201, 78, 0.3)',
        },
        '.btn-primary:hover': {
          transform: 'translateY(-2px)',
          'box-shadow': '0 8px 25px rgba(250, 201, 78, 0.4)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};