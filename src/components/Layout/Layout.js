import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import WebFont from 'webfontloader';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

WebFont.load({
  google: {
    families: ['Dancing+Script:700', 'Montserrat:500']
  }
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
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
