import React from 'react'
import { Link } from 'gatsby'
import { toHuman } from '../utils/DateUtils'

export default function PostPreview({ post }) {
  return (
    <div className="py-8 flex flex-col">
      <h2 className="text-3xl font-medium text-gray-900 mb-2">{post.frontmatter.title}</h2>
      <div className="tracking-widest font-medium text-gray-900 mt-2">{post.frontmatter.category}</div>
      <div className="text-gray-500 mt-1 mb-8">{toHuman(post.frontmatter.date)}</div>
      <p className="leading-relaxed">{post.excerpt}</p>
      <Link to={post.fields.slug} className="text-blue-500 hover:text-blue-700 inline-flex items-center mt-4">
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  )
}
