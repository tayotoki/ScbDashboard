'use client';
import { FC } from 'react';

import { classNames } from '@/shared/lib';
import { SidebarItemsType } from '../../model/types/items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemsType;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { className, item } = props;
  const pathname = usePathname();

  const isActive = pathname === item.path;

  const activeClass = isActive ? 'active' : '';

  return (
    <li>
      <Link href={item.path} className={classNames(activeClass, [className], {})}>
        <div>
          {item.Icon && <item.Icon className='fill-accent' width={24} height={24} />}
          {item.text}
        </div>
      </Link>
    </li>
  );
};
