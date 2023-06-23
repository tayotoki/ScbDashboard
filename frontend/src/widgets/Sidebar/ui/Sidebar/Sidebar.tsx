import { FC, memo } from 'react';

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { classNames } from '@/shared/lib';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.sidebar, [className], {})}>
      {getSidebarItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
});
