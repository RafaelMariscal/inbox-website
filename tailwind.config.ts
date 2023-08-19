import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#000000',
        gray: {
          100: '#dddddd',
          300: '#acacac',
          500: '#868686',
          700: '#5d5d5d',
          900: '#383838',
        },
        send: {
          100: '#f6ebd6',
          300: '#f6e3be',
          500: '#f6e68f',
          700: '#dbbd6e',
          900: '#a38742',
        },
        eden: {
          100: '#ebf6f3',
          300: '#77c9b0',
          500: '#278e6f',
          700: '#0f5e46',
          900: '#083f32',
          950: '#062E24',
        },
        salen: {
          100: '#f3f9bd',
          300: '#e2ec7d',
          500: '#b3c126',
          700: '#798213',
          900: '#546609',
        },
        terracotta: {
          100: '#fdc5b3',
          300: '#f97d54',
          500: '#de3700',
          700: '#a5310b',
          900: '#662011',
        },
      },
      backgroundImage: {
        hero: 'url(../assets/images/HeroBackground.png)',
        testemonials: 'url(../assets/images/testemonialsBg.png)',
        'radial-green':
          'radial-gradient(400% 90% at 45% 60%, rgba(255, 255, 255, 0.00) 50%, rgba(8, 63, 50, 0.30) 100%)',
        // 'radial-gradient(80% 150% at 50% 50%, rgba(255, 255, 255, 0.00) 30%, rgba(8, 63, 50, 0.30) 100%)',
      },
      boxShadow: {
        custom:
          '0px 2rem 2.75rem 0px rgba(0, 0, 0, 0.14), 0px 1.25rem 2rem 0px rgba(0, 0, 0, 0.12), 0px 0.875rem 1.125rem 0px rgba(0, 0, 0, 0.1), 0px 0.625rem 0.75rem 0px rgba(0, 0, 0, 0.08), 0px 0.25rem 0.375rem 0px rgba(0, 0, 0, 0.45), 0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.25)',
        button:
          '0px 16px 32px 0px rgba(0, 0, 0, 0.08), 0px 12px 24px 0px rgba(0, 0, 0, 0.10), 0px 10px 18px 0px rgba(0, 0, 0, 0.12), 0px 4px 12px 0px rgba(0, 0, 0, 0.14), 0px 2px 8px 0px rgba(0, 0, 0, 0.18)',
        card: '0px 32px 44px 0px rgba(0, 0, 0, 0.18), 0px 26px 32px 0px rgba(0, 0, 0, 0.14), 0px 18px 24px 0px rgba(0, 0, 0, 0.12), 0px 10px 18px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
      },

      dropShadow: {
        custom: [
          '0px 2rem 2.75rem rgba(0, 0, 0, 0.14)',
          '0px 1.25rem 2rem rgba(0, 0, 0, 0.12)',
          '0px 0.875rem 1.125rem rgba(0, 0, 0, 0.1)',
          '0px 0.625rem 0.75rem rgba(0, 0, 0, 0.08)',
          '0px 0.25rem 0.375rem rgba(0, 0, 0, 0.45)',
          '0px 0.125rem 0.25rem rgba(0, 0, 0, 0.25)',
        ],
        'custom-text': [
          '0px 3px 6px rgba(0, 0, 0, 0.14)',
          '0px 1px 2px rgba(0, 0, 0, 0.08)',
        ],
        'custom-img': [
          '0px 30px 42px rgba(0, 0, 0, 0.14)',
          '0px 18px 30px rgba(0, 0, 0, 0.12)',
          '0px 14px 16.875px rgba(0, 0, 0, 0.10)',
          '0px 10px 12px rgba(0, 0, 0, 0.08)',
          '0px 4px 6px rgba(0, 0, 0, 0.06)',
        ],
        'custom-logo': [
          '0px 2rem 3.5rem rgba(0, 0, 0, 0.30)',
          '0px 1.25rem 3rem rgba(0, 0, 0, 0.08)',
          '0px 1rem 2.25rem rgba(0, 0, 0, 0.06)',
          '0px 0.25rem 0.375rem rgba(0, 0, 0, 0.04)',
          '0px 0.125rem 0.25rem rgba(0, 0, 0, 0.02)',
        ],
      },
      screens: {
        'phones-sm': '360px',
        phones: '460px',
        'tablets-sm': '520px',
        tablets: '820px',
        'tablets-lg': '976px',
      },
      keyframes: {
        'show-divider': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'show-text': {
          '0%': { opacity: '0%', transform: 'translate(-150%)' },
          '60%': { opacity: '30%' },
          '100%': { opacity: '100%', transform: 'translate(0%)' },
        },
        show: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        hide: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
        'dialog-content-show': {
          '0%': { opacity: '0%', scale: '75%' },
          '100%': { opacity: '100%', scale: '100%' },
        },
        'dialog-content-hide': {
          '0%': {
            opacity: '100%',
            scale: '100%',
          },
          '100%': {
            opacity: '0%',
            scale: '65%',
            transform: 'translate(0%,-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
