import React from 'react';

import classes from './Navbar.module.css';
import Navitem from '../Navitem/Navitem';

const Navbar = ({ navLinks }) => (
  <nav className={classes.Navbar}>
    {
      navLinks.map(navLink => (
        <Navitem
          key={navLink.name}
          name={navLink.name}
          link={navLink.link}
          navLinks={navLink.navLinks}
        />
      ))
    }
  </nav>
);

export default Navbar;
