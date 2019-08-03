import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const { title, date } = props.data.markdownRemark.frontmatter
  const { html } = props.data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Blog
