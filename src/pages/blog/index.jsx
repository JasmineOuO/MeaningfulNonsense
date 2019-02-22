import React from 'react';

import Layout from '../../components/Layout/Layout';
import SEO from '../../components/Seo';

const BlogIndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['meaningful', 'nonsense', 'blog']} />
    Hi this is the blog
  </Layout>
);

export default BlogIndexPage;
