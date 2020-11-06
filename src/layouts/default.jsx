import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <section class="flex-1 text-gray-700 body-font">
        <div class="container px-5 mx-auto">{children}</div>
      </section>
      <Footer />
    </div>
  )
}
