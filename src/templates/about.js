import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import Content, { HTMLContent } from '../components/Content';
import Polaroid from '../components/Polaroid/Polaroid';

import classes from './post.module.css';
import galleryClasses from '../components/Gallery/Gallery.module.css';

export const AboutPageTemplate = ({ title, content, contentComponent, profiles }) => {
  const PageContent = contentComponent || Content;
  const profileCards = [];
  profiles.forEach(profile => {
    profileCards.push(
      <div key={`${profile.name}${new Date().getTime()}`} className={galleryClasses.Col2}>
        <Polaroid item={profile} type="about" />
      </div>
    );
  });
  return (
    <section className={classes.Post}>
      <div className={classes.Header}>
        <div className={classes.Title}>{title}</div>
      </div>
      <article className={classes.Content}>
        <PageContent className="content" content={content} />
      </article>
      <div className={galleryClasses.Gallery} style={{ padding: '0em 3em' }}>
        {profileCards}
      </div>
    </section>
  );
};

const AboutPage = ({ data, location }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, profiles },
      excerpt
    }
  } = data;
  return (
    <Layout>
      <SEO
        title="About"
        keywords={['meaningful', 'nonsense', 'blog', 'about']}
        description={excerpt}
        pagePath={location.pathname}
      />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={html}
        profiles={profiles}
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
        profiles {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          caption
          blurb
        }
      }
      excerpt(pruneLength: 120)
    }
  }
`;
