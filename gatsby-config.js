module.exports = {
  siteMetadata: {
    title: `Meaningful Nonsense`,
    description: `Blog 2.0`,
    author: `JasmineOuO`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meaningful Nonsense`,
        short_name: `Mn Blog`,
        start_url: `/`,
        background_color: `#f7d1d3`,
        theme_color: `#f7d1d3`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
   'gatsby-plugin-offline'
  ],
  pathPrefix: '/',
}
