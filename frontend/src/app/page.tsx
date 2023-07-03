'use client';

import { MainLayout } from '@/shared/layouts';
import { useEffect, useState } from 'react';

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('app-theme-dark');
    } else {
      document.body.classList.remove('app-theme-dark');
    }
  }, [toggle]);

  return (
    <main className='h-screen'>
      <MainLayout content={<div>content</div>} header={<header>Header</header>} sidebar={<div>Sidebar</div>} />
    </main>
  );
}
