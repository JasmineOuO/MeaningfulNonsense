import React from 'react';
import { Link } from 'gatsby';

import classes from './Dropdown.module.css';

const Dropdown = ({ navLinks, isHovered }) => {
  const dropdownClasses = [classes.Dropdown];
  if (isHovered) {
    dropdownClasses.push(classes.Open);
  }
  return (
    <div
      className={dropdownClasses.join(' ')}
      style={isHovered ? { maxHeight: 50 * navLinks.length } : { maxHeight: 0 }}
    >
      {navLinks.map(navLink => (
        <Link
          to={navLink.link}
          className={classes.Dropitem}
          activeStyle={{ color: '#fff', backgroundColor: '#BEBEBE' }}
          title={navLink.name}
          key={navLink.name}
          partiallyActive
        >
          {navLink.name}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
