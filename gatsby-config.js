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
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
  pathPrefix: '/',
};
