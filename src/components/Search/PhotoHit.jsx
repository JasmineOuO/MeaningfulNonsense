import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link, Img } from 'gatsby';

const PhotoHit = clickHandler => ({ hit }) => (
  <div>
    <Img fluid={hit.image.childImageSharp.fluid} alt={hit.title} />
    <Link to={hit.slug} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <Highlight attribute="date" hit={hit} tagName="mark" />
    <Snippet attribute="caption" hit={hit} tagName="mark" />
  </div>
);

export default PhotoHit;
