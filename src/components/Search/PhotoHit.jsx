import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PhotoHit = clickHandler => ({ hit }) => (
  <div>
    <Img style={{ width: 100 }} fluid={hit.image.childImageSharp.fluid} alt={hit.title} />
    <Link to="/photography" onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <div>
      <Highlight attribute="date" hit={hit} tagName="mark" />
      <Highlight attribute="location" hit={hit} tagName="mark" />
    </div>
  </div>
);

export default PhotoHit;
