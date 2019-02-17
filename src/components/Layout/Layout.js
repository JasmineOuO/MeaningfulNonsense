import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

// We use dynamic import to prevent "window is not defined" error
import('webfontloader').then(WebFontLoader => {
  WebFontLoader.load({
    google: {
      families: ['Dancing+Script:700', 'Montserrat:500']
    }
  })
})

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
