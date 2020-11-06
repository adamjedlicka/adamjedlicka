import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'
import PostPreview from '../components/PostPreview'
import Seo from '../components/Seo'

export default function Blog({ data }) {
  const nodes = data.allMarkdownRemark.nodes

  return (
    <DefaultLayout>
      <Seo title="Blog" />

      {nodes.map(node => (
        <PostPreview node={node} />
      ))}
    </DefaultLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
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
