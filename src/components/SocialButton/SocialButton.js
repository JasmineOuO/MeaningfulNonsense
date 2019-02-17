import React from 'react';
import classes from './SocialButton.module.css';

const SocialButton = ({ link, icon }) => (
  <a className={classes.Link} href={link} target="_blank">{icon}</a>
);

export default SocialButton;
