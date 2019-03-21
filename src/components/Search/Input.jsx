/* eslint-disable */
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

import classes from './Input.module.css';

export default connectSearchBox(({ refine, collapse, focussed, onFocus, onClick }) => (
  <form className={classes.Form} onFocus={onFocus}>
    <input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      className={
        collapse
          ? `${classes.Input} ${classes.Collapse}`
          : focussed
          ? `${classes.Input} ${classes.Expand} ${classes.Focussed}`
          : `${classes.Input} ${classes.Expand}`
      }
    />
    <FaSearch
      className={collapse ? `${classes.SearchIcon}` : `${classes.SearchIcon} ${classes.Expand}`}
      onClick={onClick}
    />
    <FaTimes
      className={collapse ? `${classes.CloseIcon}` : `${classes.CloseIcon} ${classes.Show}`}
      onClick={onClick}
    />
  </form>
));
