/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#818dff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#2d3282',
          800: '#1e2563',
          900: '#0F172A',
          950: '#080d1a',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        cuotela: {
          green: '#059669',
          'green-light': '#00C896',
          'green-glow': '#00ffa0',
          navy: '#0F172A',
          'navy-mid': '#1e2563',
          'navy-light': '#2d3282',
          gray: '#64748b',
          'gray-light': '#94a3b8',
          border: '#1e293b',
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh': "radial-gradient(at 27% 37%, hsla(165,80%,25%,0.25) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(215,100%,15%,0.5) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(165,60%,15%,0.3) 0px, transparent 50%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(5,150,105,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,200,150,0.6)' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 30px rgba(5,150,105,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
