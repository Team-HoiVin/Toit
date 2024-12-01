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
      fontSize: {
        xs: ['1.2rem', '1.4rem'],
        sm: ['1.3rem', '1.6rem'],
        base: ['1.4rem', '1.7rem'],
        lg: ['1.6rem', '1.8rem'],
        '2lg': ['1.8rem', '2.1rem'],
        xl: ['2rem', '2.4rem'],
        '2xl': ['2.4rem', '2.8rem'],
        '3xl': ['3.2rem', '3.8rem'],
        '4xl': ['4rem', '4.8rem'],
      },
    },
  },
  plugins: [],
};
export default config;
