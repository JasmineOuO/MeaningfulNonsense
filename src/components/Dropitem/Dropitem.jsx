import React from 'react';
import { Link } from 'gatsby';

import classes from './Dropitem.module.css';

const Dropitem = ({ name, link }) => (
  <Link
    to={link}
    className={classes.Dropitem}
    activeStyle={{ color: '#fff', backgroundColor: '#BEBEBE' }}
    title={name}
    key={name}
  >
    {name}
  </Link>
);

export default Dropitem;
