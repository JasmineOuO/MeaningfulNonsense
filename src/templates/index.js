import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Gallery from '../components/Gallery/Gallery';
import Archive from '../components/Archive/Archive';

export const IndexPageTemplate = () => (
  <>
    <Archive />
    <Gallery />
  </>
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
