import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Gallery from '../components/Gallery/Gallery';

export const PhotographyPageTemplate = ({ photos }) => (
  <Gallery items={photos} type="photo" numCols={4} />
);

const PhotographyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Meaningful Nonsense Photography" keywords={['meaningful', 'nonsense', 'blog']} />
      <PhotographyPageTemplate photos={frontmatter.photos} />
    </Layout>
  );
};

export default PhotographyPage;

export const pageQuery = graphql`
  query PhotographyQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "photography" } }) {
      frontmatter {
        photos {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          date(formatString: "DD/MM/YY")
          location
          caption
        }
      }
    }
  }
`;
