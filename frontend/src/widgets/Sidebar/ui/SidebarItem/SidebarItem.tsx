import { FC, memo } from 'react';

import { SidebarItemsProps } from '../../model/types/items';

import { classNames } from '@/shared/lib';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemsProps;
  collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { className, item, collapsed } = props;

  return (
    <AppLink
      to={item.path}
      activeClassName={cls.active}
      className={classNames('', [className], { [cls.collapsed]: collapsed })}
    >
      <span>{item.text}</span>
    </AppLink>
  );
});
