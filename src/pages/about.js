import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>The Banana King is the absolute ruler of Bananatopia.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </>
  )
}

export default AboutPage
