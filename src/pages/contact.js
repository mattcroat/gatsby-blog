import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>New phone. Who dis?</p>
      <p>
        {/* eslint-disable-next-line */}
        Go back <Link to="/">👈</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
