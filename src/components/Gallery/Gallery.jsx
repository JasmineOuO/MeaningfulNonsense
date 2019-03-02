import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Polaroid from '../Polaroid/Polaroid';
import classes from './Gallery.module.css';

const Gallery = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={classes.Gallery}>
      {posts && (posts
        .map(({ node: post }) => (
          <div key={post.id} className={`${classes.Col} ${classes.Flex3}`}>
            <Polaroid post={post} type="post" />
          </div>
        )))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
    query GalleryQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "post" } }}
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
    `}
    render={(data, count) => (
      <Gallery data={data} count={count} />
    )}
  />
);
