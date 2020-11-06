import React from 'react'
import { Link } from 'gatsby'
import DefaultLayout from '../layouts/default'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <DefaultLayout>
      <Seo title="Page not found" />

      <div class="py-32 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">404 - Page not found</h1>
        <Link
          to="/"
          class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
        >
          Home
        </Link>
      </div>
    </DefaultLayout>
  )
}
