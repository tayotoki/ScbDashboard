import { ReactNode } from 'react';
import Home from '../page';
import { MainLayout } from '@/shared/layouts';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export default function AppLayout({ children }: { children: ReactNode }) {
  return <MainLayout content={children} header={<Navbar />} sidebar={<Sidebar />} />;
}
