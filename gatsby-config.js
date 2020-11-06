module.exports = {
  siteMetadata: {
    title: 'Title from siteMetadata',
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-postcss',
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
