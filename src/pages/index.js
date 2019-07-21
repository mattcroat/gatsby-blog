import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const indexPage = () => {
  return (
    <>
      <Header />
      <h1>Welcome!</h1>
      <h2>I am the mighty Banana King.</h2>
      <p>
        Need a despot? <Link to="/contact">Contact me.</Link>
      </p>
      <p>
        Learn more <Link to="/about">about me.</Link>
      </p>
      <Footer />
    </>
  )
}

export default indexPage
