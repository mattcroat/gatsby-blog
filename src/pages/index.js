import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const indexPage = () => {
  return (
    <Layout>
      <h1>Welcome!</h1>
      <h2>I am the mighty Banana King.</h2>
      <p>
        Need a despot? <Link to="/contact">Contact me.</Link>
      </p>
      <p>
        Learn more <Link to="/about">about me.</Link>
      </p>
    </Layout>
  )
}

export default indexPage
