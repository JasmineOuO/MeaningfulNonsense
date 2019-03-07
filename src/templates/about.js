import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Content, { HTMLContent } from '../components/Content';
import Polaroid from '../components/Polaroid/Polaroid';

import classes from './post.module.css';
import galleryClasses from '../components/Gallery/Gallery.module.css';

export const AboutPageTemplate = ({ title, content, contentComponent, post }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className={classes.Post}>
      <div className={classes.Header}>
        <div className={classes.Title}>{title}</div>
      </div>
      <article className={classes.Content}>
        <PageContent className="content" content={content} />
      </article>
      <div className={galleryClasses.Gallery}>
        <div className={`${galleryClasses.Col} ${galleryClasses.Flex2}`}>
          <Polaroid
            post={post}
            type="about"
            caption="Jasmine Ou"
            description="Hi there"
            image={post.frontmatter.profile1}
          />
        </div>
        <div className={`${galleryClasses.Col} ${galleryClasses.Flex2}`}>
          <Polaroid
            post={post}
            type="about"
            caption="Jessica Ou"
            description="Hi there!!"
            image={post.frontmatter.profile2}
          />
        </div>
      </div>
    </section>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        title="Meaningful Nonsense About"
        keywords={['meaningful', 'nonsense', 'blog']}
        description="The about page"
      />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        post={post}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YY")
        profile1 {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile2 {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
