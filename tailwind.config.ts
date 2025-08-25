import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Servia LP Design Tokens
        primary: {
          DEFAULT: '#2563EB',
          50: '#EBF2FF',
          100: '#D6E5FF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#F3F0FF',
          100: '#E9E2FF',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          900: '#4C1D95',
        },
        accent: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          900: '#92400E',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Legacy colors for compatibility
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-accent': 'var(--primary-accent)',
        'foreground-accent': 'var(--foreground-accent)',
        'hero-background': 'var(--hero-background)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Hero typography
        'hero-xl': [
          '3.5rem',
          { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        'hero-lg': [
          '2.5rem',
          { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        'hero-md': [
          '2rem',
          { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        elevate:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-hover':
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
