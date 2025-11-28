/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0a0e1a',
        'dark-surface': '#161b22',
        'dark-elevated': '#1c2128',
        'dark-text-primary': '#e6edf3',
        'dark-text-secondary': '#7d8590',
        'dark-border': '#30363d',
        'dark-hover': '#21262d',
        
        // Light theme colors
        'light-bg': '#fafbfd',
        'light-surface': '#ffffff',
        'light-elevated': '#ffffff',
        'light-text-primary': '#0d1117',
        'light-text-secondary': '#656d76',
        'light-border': '#d0d7de',
        'light-hover': '#f3f4f6',
        
        // Accent colors
        'primary-accent': '#0969da',
        'secondary-accent': '#8250df',
        'accent-green': '#1a7f37',
        'accent-orange': '#d1242f',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'quantum-gradient': 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
