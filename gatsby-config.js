/* eslint-disable */
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.meaningfulnonsense.ca',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Meaningful Nonsense',
    description: 'A personal blog',
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
    // 'gatsby-plugin-brotli',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
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
    // {
    //   resolve: 'gatsby-plugin-csp', // https://github.com/bejamas/gatsby-plugin-csp
    //   options: {
    //     disableOnDev: false,
    //     mergeScriptHashes: true,
    //     mergeStyleHashes: true,
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       'script-src': "'self'",
    //       'style-src': "'self' blob: https://fonts.googleapis.com",
    //       'font-src': "'self' https://fonts.gstatic.com",
    //     },
    //   },
    // },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/comments`,
        name: 'comments',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Dancing Script',
            variants: ['700'],
          },
          {
            family: 'Montserrat',
            variants: ['400', '500', '600'],
          },
          {
            family: 'Open Sans Condensed',
            variants: ['300', '300i', '700'],
          },
          {
            family: 'IBM Plex Serif',
            variants: ['300'],
          },
          {
            family: 'Cutive Mono',
          },
          {
            family: 'Rock Salt',
          },
          {
            family: 'Bentham',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
  pathPrefix: '/',
};
