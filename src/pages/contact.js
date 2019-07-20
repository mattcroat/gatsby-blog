import React from "react"
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>New phone. Who dis?</p>
      <p>
        {/* eslint-disable-next-line */}
        Go back <Link to="/">👈</Link>
      </p>
    </>
  )
}

export default ContactPage
