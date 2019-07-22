module.exports = {
  siteMetadata: {
    title: 'The Banana King',
    author: 'The Banana King',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
