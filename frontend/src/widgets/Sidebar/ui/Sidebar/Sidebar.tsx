import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './Sidebar.module.scss';
import { SidebarItemsType } from '../../modal/types/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const items: SidebarItemsType[] = [
  {
    path: '/avz',
    text: 'Авз',
  },
  {
    path: '/device',
    text: 'Приборы',
  },
  {
    path: '/kipreport',
    text: 'Отчеты Кип',
  },
  {
    path: '/mechanicreport',
    text: 'Отчеты механиков',
  },
];

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const itemsList = items.map((item) => <SidebarItem item={item} key={item.path} />);

  return <div className={classNames('max-w-[280px], bg-secondary rounded-lg shadow-sm', [className], {})}>{itemsList}</div>;
};
