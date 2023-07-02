import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactElement, ReactNode } from 'react';
import cls from './MainLayout.module.css'

interface Props {
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactNode;
  toolbar?: ReactElement;
  className?: string;
}

export const MainLayout = ({ header, sidebar, content, toolbar, className }: Props) => {
  return (
    <div className={classNames(cls.wrapper, [className], {})}>
      {header}
      <div className={cls.main}>
        {sidebar}
        {content}
        {toolbar}
      </div>
    </div>
  );
};
