/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

import 'typeface-dancing-script';
import 'typeface-montserrat';
import 'typeface-open-sans-condensed';
import 'typeface-ibm-plex-serif';
import 'typeface-cutive-mono';
import 'typeface-rock-salt';
import 'typeface-bentham';
import 'typeface-roboto';

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
          <link rel="mask-icon" color="#f99599" href="/icons/safari-pinned-tab.svg" />
        </Helmet>
        <Link to="/" title="Meaningful Nonsense">
          <Header />
        </Link>
        <Navbar navLinks={data.site.siteMetadata.navLinks} />
        <main style={{ marginTop: '5vh' }}>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
