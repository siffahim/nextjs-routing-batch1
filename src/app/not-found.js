import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-7xl font-bold'>404</h2>
      <h2 className='text-4xl'>Not found page</h2>
      <Link href="/">
        <button className='bg-indigo-500 py-2 px-4 rounded text-white mt-5'>Home</button>
      </Link>
    </div>
  )
}
