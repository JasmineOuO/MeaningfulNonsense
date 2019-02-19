import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['meaningful', 'nonsense', 'blog']} />
      hello there
    <br />
      my name is jasmine
  </Layout>
);

export default IndexPage;
