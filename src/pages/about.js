import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Header />
      <h1>About</h1>
      <p>The Banana King is the absolute ruler of Bananatopia.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </>
  )
}

export default AboutPage
