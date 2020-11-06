import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <DefaultLayout>
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
