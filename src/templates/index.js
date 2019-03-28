import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Archive from '../components/Archive/Archive';

export const IndexPageTemplate = ({ posts }) => (
  <>
    <Archive key={new Date().getTime()} posts={posts} />
  </>
);

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={['meaningful', 'nonsense', 'blog']} />
      <IndexPageTemplate posts={posts} />
    </Layout>
  );
};

export default IndexPage;

// NOT NEEDED OR USED PROPERLY
export const indexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            label
            templateKey
            date(formatString: "DD/MM/YY")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  aspectRatio
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
