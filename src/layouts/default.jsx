import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 text-gray-700 body-font">
        <div className="container max-w-3xl px-5 mx-auto">{children}</div>
      </section>
      <Footer />
    </div>
  )
}
