import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const renderPosts = () => {
    return data.allContentfulBlogPost.edges.map((edge, index) => {
      const { title, slug, publishedDate } = edge.node

      return (
        <ol key={index} className={blogStyles.posts}>
          <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{publishedDate}</p>
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
