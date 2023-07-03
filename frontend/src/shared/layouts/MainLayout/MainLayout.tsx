import { ReactElement, ReactNode } from 'react';
import cls from './MainLayout.module.css';

interface Props {
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactNode;
  toolbar?: ReactElement;
  className?: string;
}

export const MainLayout = ({ header, sidebar, content, toolbar, className }: Props) => {
  return (
    <div className='h-full'>
      {header}
      <div className='flex'>
        {sidebar}
        <div className='container mx-auto p-6'>{content}</div>
        {toolbar}
      </div>
    </div>
  );
};
