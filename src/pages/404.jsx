import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1
      style={{
        margin: '150px 0 0 0',
        textAlign: 'center',
        fontFamily: 'Dancing Script, cursive',
        fontSize: '5em',
        color: '#767676'
      }}
    >
      oopsie daisies
    </h1>
    <p
      style={{
        textAlign: 'center',
        fontFamily: 'Open Sans Condensed, arial',
        fontSize: 20,
        color: '#515151'
      }}
    >
      The page you wanted doesn&#39;t exist
    </p>
  </Layout>
);

export default NotFoundPage;
