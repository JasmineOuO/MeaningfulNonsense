import React from 'react';
import classes from './SocialButton.module.css';

const SocialButton = ({ link, icon, title }) => (
  <a className={classes.Link} href={link} target="_blank" title={title} rel="noreferrer">{icon}</a>
);

export default SocialButton;
