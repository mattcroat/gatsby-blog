import React from "react"
import { Link } from "gatsby"

const indexPage = () => {
  return (
    <>
      <h1>The Banana King</h1>
      <h2>I am the mighty Banana King.</h2>
      <p>
        Need a despot? <Link to="/contact">Contact me.</Link>
      </p>
      <p>
        Learn more <Link to="/about">about me.</Link>
      </p>
    </>
  )
}

export default indexPage
