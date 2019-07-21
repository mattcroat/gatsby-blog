import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
