import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="text-xl">Adam Jedlička</span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mx-2 hover:text-gray-900">
            Home
          </Link>
          <Link to="/blog" class="mx-2 hover:text-gray-900">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
