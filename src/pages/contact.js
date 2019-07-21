import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
      <Header />
      <h1>Contact</h1>
      <p>New phone. Who dis?</p>
      <p>
        {/* eslint-disable-next-line */}
        Go back <Link to="/">👈</Link>
      </p>
      <Footer />
    </>
  )
}

export default ContactPage
