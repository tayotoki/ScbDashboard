import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='h-16 bg-background-light dark:bg-background-light-dark flex justify-end items-center'><Link href='/login'>Войти</Link></header>
  )
}
