/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,mdx,ts}'],
  darkMode: ['class', '[data-theme="wisedark"]'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontWeight: '800',
            },
            h2: {
              fontSize: '1.75rem',
              fontWeight: '700',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
            },
            figcaption: {
              fontSize: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wisetype',
    }),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        wise: {
          primary: '#00799C',
          'primary-content': '#FFFFFF',
          secondary: '#E00040',
          'secondary-content': '#FFFFFF',
          accent: '#DEE64C',
          'accent-content': '#000000',
          neutral: '#222222',
          'neutral-content': '#FFFFFF',
          'base-100': '#FFFFFF',
          info: '#00799C',
          'info-content': '#FFFFFF',
          success: '#008004',
          'success-content': '#FFFFFF',
          warning: '#9E1818',
          'warning-content': '#FFFFFF',
          error: '#9E1818',
          'error-content': '#FFFFFF',
          '.btn': {
            height: '2.5rem',
            'min-height': '2.5rem',
          },
          '.btn-xs': {
            height: '2rem',
            'min-height': '2rem',
          },
          '.btn-sm': {
            height: '2.25rem',
            'min-height': '2.25rem',
          },
          '.btn-md': {
            height: '2.5rem',
            'min-height': '2.5rem',
          },
          '.btn-lg': {
            height: '2.75rem',
            'min-height': '2.75rem',
          },
          '--border-btn': '2px',
          '--rounded-box': '0.5rem',
          // "--btn-text-case": "normal",
          '.prose.prose': {
            '--tw-prose-body': '#000000',
            '--tw-prose-headings': '#000000',
            '--tw-prose-links': '#00799C', // same as primary
          },
        },
      },
      {
        wisedark: {
          primary: '#DEE64C',
          'primary-content': '#000000',
          secondary: '#E00040',
          'secondary-content': '#FFFFFF',
          accent: '#00799C',
          'accent-content': '#FFFFFF',
          neutral: '#333333',
          'neutral-content': '#FFFFFF',
          'base-100': '#222222',
          info: '#DEE64C',
          'info-content': '#000000',
          success: '#00A305',
          'success-content': '#000000',
          warning: '#E65B5B',
          'warning-content': '#000000',
          error: '#E65B5B',
          'error-content': '#000000',
          '.btn': {
            height: '2.5rem',
            'min-height': '2.5rem',
          },
          '.btn-xs': {
            height: '2rem',
            'min-height': '2rem',
          },
          '.btn-sm': {
            height: '2.25rem',
            'min-height': '2.25rem',
          },
          '.btn-md': {
            height: '2.5rem',
            'min-height': '2.5rem',
          },
          '.btn-lg': {
            height: '2.75rem',
            'min-height': '2.75rem',
          },
          '--border-btn': '2px',
          '--tab-border': '2px',
          '--rounded-box': '0.5rem',
          // "--btn-text-case": "normal",
          '.prose.prose': {
            '--tw-prose-body': '#FFFFFF',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-links': '#DEE64C', // same as primary
          },
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    // rtl: true,
    prefix: '',
    darkTheme: 'wisedark',
  },
  safelist: [
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-neutral',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'btn-ghost',
    'btn-outline',
    'btn-link',
    'btn-xs',
    'btn-sm',
    'btn-md',
    'btn-lg',
    'btn-circle',
    'btn-square',
    'btn-block',
    'btn-disabled',
    'table',
    'table-zebra',
    'table-pin-rows',
    'table-pin-cols',
    'table-xs',
    'table-sm',
    'table-md',
    'table-lg',
    'max-w-screen-md',
    'max-w-screen-lg',
    'max-w-screen-xl',
    'wisetype',
    'dark:wisetype-invert',
    'wisetype-neutral',
    'mx-auto',
    'max-w-6xl',
    'py-8',
    'tab-xs',
    'tab-sm',
    'tab-lg',
    'm-4',
  ],
};
