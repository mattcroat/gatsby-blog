import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

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
        <ol className={blogStyles.posts}>
          <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{date}</p>
            </Link>
          </li>
        </ol>
      )
    })
  }

  return (
    <Layout>
      <h1>Blog</h1>
      {renderPosts()}
    </Layout>
  )
}

export default BlogPage
