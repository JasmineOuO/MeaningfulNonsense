import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image/Image";
import SEO from "../components/Seo/Seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`meaningful`, `nonsense`, `blog`]} />
  </Layout>
);

export default IndexPage;
