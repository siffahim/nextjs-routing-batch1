import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className='bg-indigo-50 p-5 rounded' >
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    )
}
