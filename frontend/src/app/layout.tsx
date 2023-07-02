import { classNames } from '@/shared/lib';
import './styles/globals.css';
import { ReactNode } from 'react';
import { nunitoSans, roboto } from './styles/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru' data-theme='light'>
      <body>{children}</body>
    </html>
  );
}
