import React from 'react'
import { Link } from 'gatsby'

export default function PostPreview({ node }) {
  return (
    <div class="py-8 flex flex-wrap md:flex-no-wrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="tracking-widest font-medium title-font text-gray-900">{node.frontmatter.category}</span>
        <span class="mt-1 text-gray-500 text-sm">{node.frontmatter.date}</span>
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{node.frontmatter.title}</h2>
        <p class="leading-relaxed">{node.excerpt}</p>
        <Link to={node.fields.slug} class="text-indigo-500 hover:text-indigo-700 inline-flex items-center mt-4">
          Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}
