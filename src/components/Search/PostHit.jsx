import React, { Fragment } from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

import { FaTags, FaCalendar } from 'react-icons/fa';

const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`${hit.fields.slug}`} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <div style={{ margin: '0.7em 0 0.2em 0' }}>
      <FaCalendar size="0.8em" color="grey" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      &emsp;
      <FaTags size="0.8em" color="grey" />
      &nbsp;
      {hit.tags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && ', '}
          <Link to={`${tag.toLowerCase().replace(` `, `-`)}`}>{tag}</Link>
        </Fragment>
      ))}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

export default PostHit;
