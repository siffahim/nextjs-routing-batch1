"use client"
import BlogCard from '@/components/ui/Blog/BlogCard';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'

const DynamicBlogCard = dynamic(() => import("@/components/ui/Blog/BlogCard"), {
  ssr: false,
  loading: () => <h2>Loading...</h2>
})

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  console.log(blogs)

  return (
    <div className='grid grid-cols-4 gap-5 px-24'>
      {
        blogs.map((blog, index) => <DynamicBlogCard key={index} blog={blog} />)
      }
    </div>
  )
}
