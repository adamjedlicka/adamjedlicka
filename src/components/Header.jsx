import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="p-4 flex flex-col items-center md:items-end md:flex-row text-gray-700">
      <Link to="/" className="flex font-medium text-gray-900">
        <span className="text-xl">Adam Jedlička</span>
      </Link>
      <nav className="flex mt-2 md:mt-0 md:ml-4">
        <Link to="/" activeClassName="text-gray-900 underline" className="mx-2 hover:text-gray-900">
          About me
        </Link>
        <Link
          to="/blog/"
          activeClassName="text-gray-900 underline"
          partiallyActive={true}
          className="mx-2 hover:text-gray-900"
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}
