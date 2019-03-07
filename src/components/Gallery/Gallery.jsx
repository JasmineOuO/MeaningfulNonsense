/*eslint-disable*/
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Polaroid from '../Polaroid/Polaroid';
import classes from './Gallery.module.css';

const Gallery = ({ data, numCols }) => {
  numCols = 4;
  const { edges: posts } = data.allMarkdownRemark;
  const columns = {};
  const gallery = [];
  if (posts) {
    for (let i = 0; i < numCols; i++) {
      columns[`column${i}`] = [];
    }
    posts.map(({ node: post }, index) => {
      columns[`column${index % numCols}`].push(<Polaroid post={post} type="post" />);
    });
    for (let i = 0; i < numCols; i++) {
      gallery.push(
        <div className={`${classes.Col} ${classes.Flex3}`}>
          {columns[`column${i}`]}
        </div>
      )
    }
  }
  return (
    <div className={classes.Gallery}>
      {gallery}
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
