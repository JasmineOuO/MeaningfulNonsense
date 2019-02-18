import React from 'react';
import classes from './Navitem.module.css';
import Dropitem from '../Dropitem/Dropitem';

const Navitem = ({ name, link, navLinks }) => (
  <div key={name} className={classes.Navitem}>
    <Link className={classes.Dropbtn} to={link} title={name}>{name}</Link>
    <div className={classes.Dropdown}>
      {
        navLinks.map(navLink => <Dropitem name={navLink.name} link={navLink.link} /> )
      }
    </div>
  </div>
);

export default Navitem;
