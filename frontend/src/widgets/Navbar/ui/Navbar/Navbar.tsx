import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  return (
    <div className='navbar bg-base-300 justify-between'>
      <a className='btn btn-ghost normal-case text-xl'>АРМ-КИП</a>
      <Link href='/login' className='btn btn-neutral'>Войти</Link>
    </div>
  );
};
