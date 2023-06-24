import { FC, memo } from 'react';

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib';
import { Card } from '@/shared/ui/Card';
import { getVStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props;

  return (
    <Card
      variant='light'
      className={classNames(cls.sidebar, [className, getVStack({ gap: '16', align: 'start' })], {})}
    >
      {getSidebarItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
      <ThemeSwitcher className={cls.themeSwither} />
    </Card>
  );
});
