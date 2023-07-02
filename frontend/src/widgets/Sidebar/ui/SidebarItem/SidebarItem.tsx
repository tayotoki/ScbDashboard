import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';
import { SidebarItemsType } from '../../modal/types/items';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemsType;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { className, item } = props;

  return (
    <Link href={item.path} className={classNames('flex items-center hover:text-accent-focus', [className], {})}>
      <div>
        {item.Icon && <item.Icon className='fill-accent' width={24} height={24} />}
        {item.text}
      </div>
    </Link>
  );
};
