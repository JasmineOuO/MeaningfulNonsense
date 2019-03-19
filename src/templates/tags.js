import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Gallery from '../components/Gallery/Gallery';

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;

  return (
    <Layout>
      <SEO title={`Meaningful Nonsense ${tag}`} keywords={['meaningful', 'nonsense', 'blog']} />
      <Gallery items={posts} type="post" numCols={4} />
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagQuery($tag: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
