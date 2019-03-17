import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const PhotoHit = clickHandler => ({ hit }) => (
  <div>
    <Img
      style={{ display: 'inline-block', width: 120, margin: '0 18px 10px 0', borderRadius: 5 }}
      fluid={hit.image.childImageSharp.fluid}
      alt={hit.title}
    />
    <div style={{ display: 'inline-block' }}>
      <Link to="/photography" onClick={clickHandler}>
        <h3>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h3>
      </Link>
      <div style={{ marginTop: 8 }}>
        <FaCalendar size="0.8em" color="grey" />
        &nbsp;
        <Highlight attribute="date" hit={hit} tagName="mark" />
        <br />
        <FaMapMarkerAlt size="0.8em" color="grey" />
        &nbsp;
        <Highlight attribute="location" hit={hit} tagName="mark" />
      </div>
    </div>
  </div>
);

export default PhotoHit;
