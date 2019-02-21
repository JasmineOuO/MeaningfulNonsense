import React from 'react';

import Layout from '../../components/Layout/Layout';
import SEO from '../../components/Seo';

const BlogIndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['meaningful', 'nonsense', 'blog']} />
    <section className="section">
      <div className="container">
        <div className="content">
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: 'url(\'/images/gatsby-astronaut.png\')',
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                backgroundColor: '#f40',
                color: 'white',
                padding: '1rem',
              }}
            >
              Latest Stories
            </h1>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;
