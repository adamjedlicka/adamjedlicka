import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/default'
import Seo from '../components/Seo'
import Content from '../components/Content'
import { toHuman } from '../utils/DateUtils'

export default function BlogPost({ data }) {
  const { post } = data

  return (
    <DefaultLayout>
      <Seo title={post.frontmatter.title} />

      <h1 className="text-4xl text-gray-900 mt-8 font-bold">{post.frontmatter.title}</h1>
      <div className="tracking-widest font-medium text-gray-900 mt-4">{post.frontmatter.category}</div>
      <div className="text-gray-500 mt-1 mb-8">{toHuman(post.frontmatter.date)}</div>
      <Content content={post.html} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        category
        title
      }
    }
  }
`
