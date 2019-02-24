
import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Layout from '../components/Layout/Layout';
import Content, { HTMLContent } from '../components/Content';
import classes from './blog-post.module.css';

export const BlogPostTemplate = ({
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
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className={classes.Header}>
              <div className={classes.Title}>{title}</div>
              <time className={classes.Time}>{date}</time>
              <div className={classes.Author}>By Jessica Ou</div>
            </div>
            <article className={classes.Content}>
              <PostContent content={content} />
            </article>
            <div className={classes.Nav}>
              {prev && (
                <Link to={prev.fields.slug} style={{ float: 'left', textAlign: 'left' }}>
                  <div style={{ height: '10em', margin: '-3px 12px 0 0', float: 'left' }}>
                    <FaAngleLeft className={classes.NavIcon} />
                  </div>
                  PREVIOUS POST
                  <br />
                  <p>{prev.frontmatter.title}</p>
                </Link>
              )}
              {next && (
                <Link to={next.fields.slug} style={{ float: 'right', textAlign: 'right' }}>
                  <div style={{ height: '10em', margin: '-3px 0 0 12px', float: 'right' }}>
                    <FaAngleRight className={classes.NavIcon} />
                  </div>
                  NEXT POST
                  <br />
                  <p>{next.frontmatter.title}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data, pageContext }) => {
  const {
    post: {
      html,
      frontmatter: {
        title, date, tags, description,
      },
    },
  } = data;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <BlogPostTemplate
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
    post: markdownRemark(id: { eq: $id }) {
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
