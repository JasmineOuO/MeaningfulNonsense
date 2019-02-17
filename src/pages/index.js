import React from "react";
import { Link } from "gatsby";
import WebFont from 'webfontloader';

import Layout from "../components/Layout/Layout";
import Image from "../components/Image/Image";
import SEO from "../components/Seo/Seo";

WebFont.load({
  google: {
    families: ['Dancing+Script:700', 'Montserrat:500']
  }
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`meaningful`, `nonsense`, `blog`]} />
  </Layout>
);

export default IndexPage;
