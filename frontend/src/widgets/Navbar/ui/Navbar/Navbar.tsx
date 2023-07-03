import { Text } from '@/shared/ui/Text';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='h-16 bg-theme-lightBg flex justify-between px-4 items-center'>
      <Text text='АРМ-КИП' size='l' className='text-orange-500' />
    </div>
  );
};
