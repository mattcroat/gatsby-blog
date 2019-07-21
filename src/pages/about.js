import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>The Banana King is the absolute ruler of Bananatopia.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
