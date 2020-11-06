module.exports = {
  siteMetadata: {
    title: 'Adam Jedlička',
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content',
      },
    },
  ],
}
