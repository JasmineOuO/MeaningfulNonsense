/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

// We use dynamic import to prevent "window is not defined" error
import('webfontloader').then(WebFontLoader => WebFontLoader.load({
  google: {
    families: ['Dancing+Script:700', 'Montserrat:500', 'Open+Sans+Condensed:300,700'],
  },
}));

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
        <Header />
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
