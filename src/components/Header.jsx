import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container max-w-3xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">Adam Jedlička</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mx-2 hover:text-gray-900">
            Home
          </Link>
          <Link to="/blog" className="mx-2 hover:text-gray-900">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
