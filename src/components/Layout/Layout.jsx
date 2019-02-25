/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            navLinks {
              name
              link
              navLinks {
                name
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#f99599" />
          <link rel="mask-icon" color="#f99599" href="/favicons/safari-pinned-tab.svg" />
        </Helmet>
        <Link to="/" title="Go to homepage">
          <Header />
        </Link>
        <Navbar navLinks={data.site.siteMetadata.navLinks} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
