import React from 'react';
import { Link } from 'gatsby';

import classes from './Navitem.module.css';
import Dropitem from '../Dropitem/Dropitem';

const Navitem = ({ name, link, navLinks }) => (
  <div key={name} className={classes.Navitem}>
    <Link
      to={link}
      className={classes.Dropbtn}
      activeStyle={{ backgroundColor: '#e8b4cd' }}
      title={name}
      key={name}
    >
      {name}
    </Link>
    <div className={classes.Dropdown}>
      {
        navLinks.map(navLink => <Dropitem name={navLink.name} link={navLink.link} />)
      }
    </div>
  </div>
);

export default Navitem;
