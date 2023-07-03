/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      theme: {
        DEFAULT: 'var(--bg)',
        darkBg: 'var(--dark-bg)',
        lightBg: 'var(--light-bg)',
        text: 'var(--text)',
        hint: 'var(--hint)',
        cancel: 'var(--cancel)',
        save: 'var(--save)',
        icon: 'var(--icon)',
        accent: 'var(--accent)',
      },
    },
    fontFamily: {
      roboto: ['Roboto, sans-serif'],
      nunitoSans: ['Nunito Sans, sans-serif'],
    },
    fontSize: {
      s: ['var(--font-size-s)', 'var(--font-line-s)'],
      m: ['var(--font-size-m)', 'var(--font-line-m)'],
      l: ['var(--font-size-l)', 'var(--font-line-l)'],
      xl: ['var(--font-size-xl)', 'var(--font-line-xl)'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
