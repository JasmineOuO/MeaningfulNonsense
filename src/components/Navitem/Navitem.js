import React from 'react';
import classes from './Navitem.module.css';
import Dropitem from '../Dropitem/Dropitem';

const Navitem = () => (
  <div className={classes.Navitem}>
    <a className={classes.Dropbtn}></a>
    <div className={classes.Dropdown}>
      <Dropitem />
      <Dropitem />
    </div>
  </div>
);

export default Navitem;