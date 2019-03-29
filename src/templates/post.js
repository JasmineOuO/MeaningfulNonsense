import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Layout from '../components/Layout/Layout';
import Content, { HTMLContent } from '../components/Content';
import SEO from '../components/Seo';
import Comments from '../components/Comments/Comments';

import classes from './post.module.css';

export const BlogPostLayout = ({ content, contentComponent, title, date, prev, next }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className={classes.Post}>
      <div className={classes.Header}>
        <div className={classes.Title}>{title}</div>
        <div className={classes.Time}>{date}</div>
        <div className={classes.Author}>By Jessica Ou</div>
      </div>
      <article className={classes.Content}>
        <PostContent content={content} />
      </article>
      <div className={classes.Nav}>
        <div className={classes.Prev}>
          {prev && (
            <Link to={prev.fields.slug}>
              <span>
                <FaAngleLeft className={classes.NavIcon} />
              </span>
              PREVIOUS POST
              <br />
              <p>{prev.frontmatter.title}</p>
            </Link>
          )}
        </div>
        <div className={classes.Next}>
          {next && (
            <Link to={next.fields.slug}>
              <span>
                <FaAngleRight className={classes.NavIcon} />
              </span>
              NEXT POST
              <br />
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data, pageContext }) => {
  const {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: { title, date, tags }
    },
    allCommentsYaml
  } = data;
  const { prev, next, slug } = pageContext;
  return (
    <Layout>
      <SEO title={title} keywords={['meaningful', 'nonsense', 'blog']} description={excerpt} />
      <BlogPostLayout
        content={html}
        contentComponent={HTMLContent}
        tags={tags}
        title={title}
        date={date}
        prev={prev}
        next={next}
      />
      <Comments allCommentsYaml={allCommentsYaml} slug={slug} />
    </Layout>
  );
};

export default BlogPost;

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      excerpt(pruneLength: 120)
    }
    allCommentsYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          name
          message
          date(formatString: "MMMM DD, YYYY @ HH:mma")
        }
      }
    }
  }
`;
