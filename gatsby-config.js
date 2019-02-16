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
        short_name: `Meaningful Nonsense`,
        start_url: `/`,
        background_color: `#f7d1d3`,
        theme_color: `#f7d1d3`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
   'gatsby-plugin-offline',
  ],
  pathPrefix: "/MeaningfulNonsense",
}
