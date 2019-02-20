/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'Meaningful Nonsense',
    description: 'Blog 2.0',
    author: 'JasmineOuO',
    navLinks: [
      {
        name: 'home',
        link: '/',
        navLinks: [],
      },
      {
        name: 'about',
        link: '/about',
        navLinks: [],
      },
      {
        name: 'photography',
        link: '',
        navLinks: [
          {
            name: 'food',
            link: '/food',
          },
          {
            name: 'travel',
            link: '/travel',
          },
        ],
      },
      {
        name: 'stories',
        link: '',
        navLinks: [
          {
            name: 'all stories',
            link: '/stories',
          },
          {
            name: 'serendipity',
            link: '/serendipity',
          },
        ],
      },
      {
        name: 'life',
        link: '',
        navLinks: [
          {
            name: 'all life entries',
            link: '/life',
          },
          {
            name: 'everyday thoughts',
            link: '/everydaythoughts',
          },
          {
            name: 'life lessons',
            link: '/lifelessons',
          },
        ],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Meaningful Nonsense',
        short_name: 'Mn Blog',
        start_url: '/',
        background_color: '#f7d1d3',
        theme_color: '#f7d1d3',
        display: 'standalone',
        icon: 'src/images/icon.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-csp', // https://github.com/bejamas/gatsby-plugin-csp
      options: {
        disableOnDev: false,
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self'",
          'style-src': "'self' blob: https://fonts.googleapis.com",
          'font-src': "'self' https://fonts.gstatic.com",
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
  pathPrefix: '/',
};
