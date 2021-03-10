import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:w-4/6 mx-auto min-h-screen">
        <Header />
        <section className="p-4 flex-1 text-gray-700 body-font">{children}</section>
        <Footer />
      </div>
    </div>
  )
}
