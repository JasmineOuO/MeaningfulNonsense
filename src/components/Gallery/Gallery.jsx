/* eslint-disable */
import React from 'react';

import Polaroid from '../Polaroid/Polaroid';
import classes from './Gallery.module.css';

const Gallery = ({ type, items, numCols }) => {
  const columns = {};
  const gallery = [];
  if (items) {
    for (let i = 0; i < numCols; i++) {
      columns[`column${i}`] = [];
    }
    if (type === 'post') {
      items.forEach(({ node: item }, index) => {
        columns[`column${index % numCols}`].push(
          <Polaroid key={item.id} item={item} type={type} />
        );
      });
    } else {
      items.forEach((item, index) => {
        columns[`column${index % numCols}`].push(
          <Polaroid key={`polaroid${new Date().getTime()}`} item={item} type={type} />
        );
      });
    }
    for (let i = 0; i < numCols; i++) {
      gallery.push(
        <div key={`column${new Date().getTime()}`} className={`${classes.Col} ${classes.Flex3}`}>
          {columns[`column${i}`]}
        </div>
      );
    }
  }
  return <div className={classes.Gallery}>{gallery}</div>;
};

export default Gallery;
