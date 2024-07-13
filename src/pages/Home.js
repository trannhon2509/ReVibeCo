import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Deals from '../components/Deals'
import About from '../components/About'
import Products from '../components/Products'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Deals />
      <Products />
      <About />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home