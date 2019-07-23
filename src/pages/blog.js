import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, date } } }) => (
      <ol>
        <li>
          <h2>{title}</h2>
          <p>{date}</p>
        </li>
      </ol>
    ))
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      {renderPosts()}
    </Layout>
  )
}

export default BlogPage
