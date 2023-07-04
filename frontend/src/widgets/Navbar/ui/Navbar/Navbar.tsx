import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  return (
    <div className='navbar justify-between'>
      <Link href='/' className='btn btn-primary px-1'>
        <span className='text-base-300 text-lg'>АРМ-КИП</span>
      </Link>
      <Link href='/login' className='btn btn-ghost'>
        Войти
      </Link>
    </div>
  );
};
