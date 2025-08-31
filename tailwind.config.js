/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'elegant': {
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
        },
        'bitter': {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#9ca3af',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#000000',
        },
        'accent': {
          gray: '#9ca3af',
          silver: '#d1d5db',
          charcoal: '#4b5563',
        }
      },
      backgroundImage: {
        'elegant-gradient': 'linear-gradient(135deg, #000000 0%, #0d0d0d 30%, #080808 70%, #000000 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(16,16,16,0.08) 0%, rgba(24,24,24,0.12) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)',
        'bitter-gradient': 'linear-gradient(135deg, #000000 0%, #0d0d0d 50%, #1a1a1a 100%)',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(128, 128, 128, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(160, 160, 160, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
