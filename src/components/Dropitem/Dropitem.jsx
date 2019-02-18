import React from 'react';
import classes from './Dropitem.module.css';

const Dropitem = ({ name, link }) => (
  <Link
    key={name}
    to={link}
    title={name}
    className={classes.Dropitem}
  >
    {name}
  </Link>
);

export default Dropitem;
