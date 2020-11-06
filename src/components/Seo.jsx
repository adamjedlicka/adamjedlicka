import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Seo({ title }) {
  const { site } = useStaticQuery(query)

  const seo = {
    title: title || site.siteMetadata.title,
  }

  return (
    <Helmet title={seo.title}>
      <html lang="en" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
      }
    }
  }
`
