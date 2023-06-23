import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { SidebarItemsProps } from '../../model/types/items';

import { classNames } from '@/shared/lib';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemsProps;
  collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { className, item, collapsed } = props;

  return (
    <NavLink to={item.path} className={classNames(cls.sidebarItem, [className], { [cls.collapsed]: collapsed })}>
      <span>{item.text}</span>
    </NavLink>
  );
});
