import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'
import PostPreview from '../components/PostPreview'
import Seo from '../components/Seo'

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <DefaultLayout>
      <Seo title="Blog" />

      {posts.map(post => (
        <PostPreview post={post} key={post.id} />
      ))}
    </DefaultLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        excerpt
        frontmatter {
          date
          title
          category
        }
        fields {
          slug
        }
      }
    }
  }
`
