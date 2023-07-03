/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
    },
    fontFamily: {
      roboto: ['var(--font-title)'],
      nunitoSans: ['var(--font-text)'],
    },
    fontSize: {
      s: ['var(--font-size-s)', 'var(--font-line-s)'],
      m: ['var(--font-size-m)', 'var(--font-line-m)'],
      l: ['var(--font-size-l)', 'var(--font-line-l)'],
      xl: ['var(--font-size-xl)', 'var(--font-line-xl)'],
    },
    fontWeight: {
      bold: 'bold',
    },
    plugins: [],
    darkMode: 'class',
  },
};
