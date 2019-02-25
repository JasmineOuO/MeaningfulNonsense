
import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Layout from '../components/Layout/Layout';
import Content, { HTMLContent } from '../components/Content';
import classes from './post.module.css';

export const BlogPostLayout = ({
  content,
  contentComponent,
  title,
  helmet,
  date,
  prev,
  next,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className={classes.Post}>
      {helmet || ''}
      <div className={classes.Header}>
        <div className={classes.Title}>{title}</div>
        <time className={classes.Time}>{date}</time>
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
      frontmatter: {
        title, date, tags, description,
      },
    },
  } = data;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <BlogPostLayout
        content={html}
        contentComponent={HTMLContent}
        helmet={(
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content={`${description}`}
            />
          </Helmet>
        )}
        tags={tags}
        title={title}
        date={date}
        prev={prev}
        next={next}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
