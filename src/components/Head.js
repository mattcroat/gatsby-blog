import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title: pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title: siteTitle } = data.site.siteMetadata

  return <Helmet title={`${siteTitle} | ${pageTitle}`} />
}

export default Head
