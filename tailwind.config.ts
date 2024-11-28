import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          tertiary: 'var(--brand-tertiary)',
        },
        point: {
          purple: 'var(--point-purple)',
          blue: 'var(--point-blue)',
          cyan: 'var(--point-cyan)',
          pink: 'var(--point-pink)',
          rose: 'var(--point-rose)',
          orange: 'var(--point-orange)',
          yellow: 'var(--point-yellow)',
        },
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
          inverse: 'var(--background-inverse)',
        },
        interaction: {
          inactive: 'var(--interaction-inactive)',
          hover: 'var(--interaction-hover)',
          pressed: 'var(--interaction-pressed)',
          focus: 'var(--interaction-focus)',
        },
        border: {
          primary: 'var(--border-primary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          default: 'var(--text-default)',
          inverse: 'var(--text-inverse)',
          disabled: 'var(--text-disabled)',
        },
        status: {
          danger: 'var(--status-danger)',
        },
        icon: {
          primary: 'var(--icon-primary)',
          inverse: 'var(--icon-inverse)',
          brand: 'var(--icon-brand)',
        },
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-tertiary) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
