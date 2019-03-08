import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Gallery from '../components/Gallery/Gallery';
import Archive from '../components/Archive/Archive';

export const IndexPageTemplate = ({ posts }) => (
  <>
    <Archive key={new Date().getTime()} />
    <Gallery items={posts} type="post" numCols={4} />
  </>
);

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Meaningful Nonsense Home" keywords={['meaningful', 'nonsense', 'blog']} />
      <IndexPageTemplate posts={posts} />
    </Layout>
  );
};

export default IndexPage;

// NOT NEEDED OR USED PROPERLY
export const pageQuery = graphql`
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
