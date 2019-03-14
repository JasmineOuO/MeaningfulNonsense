import React, { Fragment } from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

import { FaCalendar, FaTags } from 'react-icons/fa';

const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`/blog/${hit.fields.slug}`} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <div>
      <FaCalendar size="1em" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      &emsp;
      <FaTags size="1em" />
      &nbsp;
      {hit.tags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && ', '}
          <Link to={`blog/${tag.toLowerCase().replace(` `, `-`)}`}>{tag}</Link>
        </Fragment>
      ))}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

export default PostHit;
