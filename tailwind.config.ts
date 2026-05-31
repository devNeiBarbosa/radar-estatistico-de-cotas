import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        patrimony: {
          50: '#2A1111',
          100: '#3B1313',
          500: '#FF3B30',
          700: '#FF3B30',
          900: '#FF5E57'
        },
        ink: '#FFFFFF'
      },
      boxShadow: {
        premium: '0 20px 60px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'premium-card': 'linear-gradient(135deg, rgba(42, 17, 17, 0.92), rgba(59, 19, 19, 0.82), rgba(30, 11, 11, 0.92))',
        'premium-panel': 'linear-gradient(135deg, rgba(59, 19, 19, 0.82), rgba(90, 29, 29, 0.28))'
      }
    }
  },
  plugins: []
};

export default config;
