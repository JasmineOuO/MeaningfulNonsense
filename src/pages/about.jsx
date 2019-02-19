import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={['meaningful', 'nonsense', 'blog']} />
  </Layout>
);

export default IndexPage;
