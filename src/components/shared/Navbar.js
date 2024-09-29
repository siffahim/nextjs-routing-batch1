import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-indigo-500 text-white flex items-center justify-between py-5 px-20'>
      <Link href="/">
        Logo
      </Link>
      <ul className='flex items-center gap-10'>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/foods'>Foods</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/about'>About</Link>
        <Link href='/earnings'>Dashboard</Link>
        <Link href='/login'>Login</Link>
      </ul>
    </nav>
  )
}
