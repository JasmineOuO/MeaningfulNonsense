/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Animation from '../Animation/Animation';
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
          <link rel="mask-icon" color="#f99599" href="/icons/safari-pinned-tab.svg" />
        </Helmet>
        {/* <Animation className="winter" fallSpeed={1.5} minSize={7} maxSize={12} newOn={500} /> */}
        {/* <Animation className="summer" fallSpeed={1} minSize={12} maxSize={18} newOn={700} /> */}
        {/* <Animation className="autumn" fallSpeed={1.5} minSize={12} maxSize={18} newOn={600} /> */}
        <Animation className="spring" fallSpeed={1} minSize={9} maxSize={14} newOn={700} />
        <Link to="/" title="Go to homepage"><Header /></Link>
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
