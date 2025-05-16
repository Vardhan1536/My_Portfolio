/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          100: '#F9FAFB',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        light: {
          50: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        },
        primary: {
          light: '#818CF8', // Indigo 400
          DEFAULT: '#6366F1', // Indigo 500
          dark: '#4F46E5', // Indigo 600
        },
        secondary: {
          light: '#A78BFA', // Violet 400
          DEFAULT: '#8B5CF6', // Violet 500
          dark: '#7C3AED', // Violet 600
        },
        accent: {
          light: '#F472B6', // Pink 400
          DEFAULT: '#EC4899', // Pink 500
          dark: '#DB2777', // Pink 600
        },
        success: {
          light: '#34D399', // Emerald 400
          DEFAULT: '#10B981', // Emerald 500
          dark: '#059669', // Emerald 600
        },
        warning: {
          light: '#FBBF24', // Amber 400
          DEFAULT: '#F59E0B', // Amber 500
          dark: '#D97706', // Amber 600
        },
        error: {
          light: '#F87171', // Red 400
          DEFAULT: '#EF4444', // Red 500
          dark: '#DC2626', // Red 600
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-accent': '0 0 15px rgba(236, 72, 153, 0.5)',
      },
    },
  },
  plugins: [],
};