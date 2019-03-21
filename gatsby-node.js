const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              tags
              templateKey
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      _.each(posts, (edge, index) => {
        const {
          id,
          fields: { slug },
          frontmatter: { templateKey, tags }
        } = edge.node;
        const prev = index === 0 ? null : posts[index - 1].node;
        const next = index === posts.length - 1 ? null : posts[index + 1].node;
        createPage({
          path: slug,
          tags,
          component: path.resolve(`src/templates/${String(templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id,
            slug,
            prev,
            next
          }
        });
      });

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        let category = '';
        if (tag === 'serendipity') {
          category = '/stories';
        } else if (tag === 'everyday-thoughts' || tag === 'life-lessons') {
          category = '/life';
        }
        const tagPath = `${category}/${_.kebabCase(tag)}/`;

        createPage({
          path: tagPath,
          component: path.resolve('src/templates/tags.js'),
          context: {
            tag
          }
        });
      });

      return posts;
    })
    .catch(err => {
      console.log(err);
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};
