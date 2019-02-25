import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Gallery from '../components/Gallery/Gallery';
import SEO from '../components/Seo';

export const IndexPageTemplate = () => (
  <Gallery />
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Meaningful Nonsense Home" keywords={['meaningful', 'nonsense', 'blog']} description={frontmatter.description} />
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index"}}) {
      frontmatter {
        title
        description
      }
    }
  }
`;
