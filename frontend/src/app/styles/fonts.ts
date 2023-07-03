import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../../shared/assets/fonts/roboto-v30-cyrillic_latin-900.woff2',
    },
    {
      path: '../../shared/assets/fonts/roboto-v30-cyrillic_latin-regular.woff2',
    },
  ],
  variable: '--font-title',
});

export const nunitoSans = localFont({
  src: [
    {
      path: '../../shared/assets/fonts/roboto-v30-cyrillic_latin-regular.woff2',
    },
    {
      path: '../../shared/assets/fonts/nunito-sans-v15-cyrillic_latin-regular.woff2',
    },
  ],
  variable: '--font-text',
});
