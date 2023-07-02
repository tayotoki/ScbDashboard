

import { MainLayout } from '@/shared/layouts';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { ReactNode, useEffect, useState } from 'react';

export default function Home({ children }: { children: ReactNode }) {
  return (
    <main className='h-screen'>
      <MainLayout content={children} header={<Navbar />} sidebar={<Sidebar />} />
    </main>
  );
}
