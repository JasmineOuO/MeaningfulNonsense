const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/pages/blog/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        excerpt(pruneLength: 1000)
      }
    }
  }
}`;

const pageQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/pages/about/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
        }
        excerpt(pruneLength: 1000)
      }
    }
  }
}`;

const photographyQuery = `{
  photos: markdownRemark(fileAbsolutePath: { regex: "/pages/photography/" }) {
    frontmatter {
      photos {
        image {
          objectID: id
        }
        title
        date
        caption
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings
  },
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Pages`,
    settings
  },
  {
    query: photographyQuery,
    transformer: ({ data }) => data.photos.frontmatter.photos,
    indexName: `Photos`,
    settings
  }
];

module.exports = queries;
