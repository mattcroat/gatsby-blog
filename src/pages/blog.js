import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const renderPosts = () => {
    return data.allMarkdownRemark.edges.map(edge => {
      const { title, date } = edge.node.frontmatter
      const { slug } = edge.node.fields

      return (
        <ol>
          <li>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
          </li>
        </ol>
      )
    })
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
