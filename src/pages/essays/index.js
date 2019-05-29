import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

export default ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      {posts.map(({ node }) => {
        const { id, excerpt, fields, frontmatter } = node
        const { title, author } = frontmatter
        return (
          <div key={id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{excerpt}</p>
            <Link to={fields.path}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query essaysIndex {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            path
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
