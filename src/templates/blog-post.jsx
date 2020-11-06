import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'
import Seo from '../components/Seo'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <DefaultLayout>
      <Seo title={post.frontmatter.title} />

      <div class="prose">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </DefaultLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
