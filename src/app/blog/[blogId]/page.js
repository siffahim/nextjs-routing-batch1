"use client"
import { useParams } from 'next/navigation';
import React from 'react'

export default function BlogDetailPage({params: {blogId}}) {
    console.log(blogId);
    // const query = useParams();
    // console.log(query)
  return (
    <div>
      <h2>Blog details page</h2>
    </div>
  )
}
