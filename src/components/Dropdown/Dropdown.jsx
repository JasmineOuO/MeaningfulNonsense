import React from 'react';
import { Link } from 'gatsby';

import classes from './Dropdown.module.css';

const Dropdown = ({ navLinks, isHovered }) => (
  <div
    className={isHovered ? `${classes.Dropdown} ${classes.Open}` : classes.Dropdown}
    style={isHovered ? { maxHeight: 50 * navLinks.length } : { maxHeight: 0 }}
  >
    {
      navLinks.map(navLink => (
        <Link
          to={navLink.link}
          className={classes.Dropitem}
          activeStyle={{ color: '#fff', backgroundColor: '#BEBEBE' }}
          title={navLink.name}
          key={navLink.name}
        >
          {navLink.name}
        </Link>
      ))
    }
  </div>
);

export default Dropdown;
