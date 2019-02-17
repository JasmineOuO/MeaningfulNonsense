import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import classes from "./Header.module.css";

const Header = ({ siteTitle }) => (
  <header className={classes.Header}>
    <svg className={classes.Branches} width="1300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 183.57"><path d="M0,115.34l6,.3a103.53,103.53,0,0,1,13,1.7c4.1.7,10,1.7,13,2.1s13.2,3.1,22.5,6.1c16.3,5.2,17.7,5.5,32.5,6.4,8.5.5,18.2,1.6,21.5,2.4s8.7,1.7,12,2,10.3,1.6,15.5,2.7a116.12,116.12,0,0,0,17,2.3c4.1.2,10.4.7,14,1.1a152.8,152.8,0,0,0,16.5.8c8.9-.1,11.1-.5,20-3.7,11.3-4.2,17.3-4.7,21.3-1.8a37.83,37.83,0,0,0,8.7,3.5c3.3,1,11.6,4.7,18.5,8.2,7.2,3.8,15.2,7.2,19,8a42.75,42.75,0,0,1,19.5,9.4c6.4,5.1,12.6,7.1,21.4,7.1,9.9,0,16.8-1.5,32.2-6.7,15.8-5.4,21.3-6.2,49.7-7.3,20.5-.7,25.3-1.5,22.7-4-.6-.4-11.5-.5-24.5-.1-15.6.5-24.1.3-25.2-.3-1.2-.8-3.1-.4-7.5,1.5-7.8,3.5-29.3,10.3-37.1,11.9-15,2.9-31.4-3-35.2-12.6-1.3-3.3-1.7-3.6-4.5-3.1-6,1.2-21.5-3.1-21.5-5.9,0-1.5,2.3-3.5,8-6.7a59.47,59.47,0,0,0,10.9-9.8c10.3-11.6,12.8-12.2,15.2-3.9a16.69,16.69,0,0,0,3.5,6l2.3,2.1-.1-3.1c-.1-2-.8-3.6-2-4.2-2.5-1.3-2.4-4.9.2-4.9,2.9,0,2.5-1.8-.6-2.6-3.7-.9-2.1-2,9.6-5.9l10.4-3.5,3.4,2c4.3,2.6,5.3,1.8,2.2-1.5-1.3-1.4-2.2-2.6-1.9-2.8,5.1-4.3,19.6-14.1,21.6-14.6a4.52,4.52,0,0,0,3.4-3.5c.4-1.5,3.2-5.3,6.1-8.4s8.6-10.1,12.5-15.4c8.5-11.4,16.3-17.3,22.5-16.9,7.6.4,11.9-3,24.7-19.1,3.3-4.3,6.1-8,6.1-8.3s-.9-.5-1.9-.5-3.3,1.7-5,3.8c-15.7,19.5-16.6,20.2-25.2,20.2-4.1,0-6.3.5-8.2,2a16.33,16.33,0,0,1-2.9,2c-.3,0-1.3-3.7-2.2-8.3-2.6-11.8-2.4-11.3-4.1-9.6-1.2,1.2-1.2,2.3,0,8.3.8,3.8,1.7,7.7,2,8.6.4,1.1-1,3.7-3.8,7.1-2.4,3-6.8,8.8-9.9,12.9a136.65,136.65,0,0,1-11.2,13c-3.1,3-5.6,5.9-5.6,6.5-.1,1.5-17,12.8-17,11.3,0-2.7,16.5-29.8,22.6-37.1,2.4-2.8,3.2-5.7,1.6-5.7-1.9,0-16.1,20.6-23.8,34.5a79.18,79.18,0,0,1-5,8.3,9.55,9.55,0,0,0-1.9,3.1c-.4,1.5-3.5,2.9-11.8,5.6-6.2,1.9-12.4,3.9-13.9,4.4-2.2.7-3.3.3-6.7-2.7-2.3-1.9-4.1-4.1-4.1-4.9,0-1.9-3.9-1.6-18.4,1.2-18.2,3.7-27.5,6.9-35.2,12.1l-6.7,4.6-4.3-4.8c-2.4-2.6-4.7-5.6-5-6.8a25.36,25.36,0,0,0-4-5.9c-1.9-2-3.4-4.3-3.4-5.1,0-1.6-8.5-9.6-14-13.2-2.4-1.6-5.2-2.3-9-2.5-6.9-.2-22.8,3.2-34.5,7.4-8.4,3-9.9,3.2-22,3.2A182.25,182.25,0,0,1,103,94c-4.7-.7-10.4-1.5-12.7-1.8-5.1-.7-16.7,2-20.5,4.7a11.14,11.14,0,0,1-5,1.9c-1.3,0-5.9,1.8-10.3,4.1-7.4,3.8-8.5,4-14.3,3.6a36.81,36.81,0,0,1-11.5-3c-3.9-1.9-7.6-2.6-14.7-3.1a105.8,105.8,0,0,1-11.7-1.2L0,98.64Z"/><path d="M1600,108.11l-3.5.93a94.42,94.42,0,0,1-12,1.4c-6,.5-10.3,1.4-13,2.7s-6.7,2.2-11.5,2.5c-7.2.4-8,.2-14.8-3.2-3.9-2-8.4-3.6-9.9-3.6a7.54,7.54,0,0,1-4.7-1.9c-1.2-1-5.2-2.6-9.1-3.5s-8.1-2.3-9.5-3.1c-2.1-1.1-2.8-1.1-5,.5-3.3,2.3-19.3,4.3-34,4.4-10.5,0-12.2-.3-19.6-3.1-7.6-2.9-21.2-6.3-33.3-8.3-4.4-.8-5.9-.6-8.3.8-4.2,2.5-15.8,13.8-15.8,15.5,0,.7-1.2,2.4-2.6,3.8a18.49,18.49,0,0,0-4.1,5.8c-2,4.7-8.4,12.1-10.4,12.1-1,0-3-1.1-4.6-2.4-7.2-6-19.4-10.4-39.3-14.1-12.9-2.4-14.3-2.2-19.2,3.1-3.7,4-4.5,4.4-7.2,3.8-6.9-1.4-24.2-7.7-25.1-9.2a22.87,22.87,0,0,0-2.6-3.2,95.44,95.44,0,0,1-6.3-10.4c-9-16.5-21.4-33.5-23.5-32.2-.7.5.3,2.6,3.2,6.4a244.18,244.18,0,0,1,17.6,27.3c4.4,8.2,4.8,9.4,2.7,8.6-2.6-1-15.6-11-15.6-11.9,0-.6-2-2.8-4.4-4.9s-8.6-9.4-13.8-16-10.1-13.1-11-14.3c-1.6-2.1-1.6-2.7.3-11.1,1.3-5.6,1.6-9.2,1-9.8-1.3-1.3-3.1.1-3.1,2.5,0,2.1-2.9,14-3.6,14.7-.2.2-1.9-.7-3.9-2-2.6-1.8-4.2-4.3-6.6-9.9-4.6-11.2-4.8-17.4-1-29.2,3.9-12.3,4.9-18.2,3-17.6-.7.2-1.7,2.2-2.2,4.4s-2.1,8.2-3.8,13.4c-3.8,11.5-3.5,17.8,1,29.1,1.7,4.3,2.6,7.8,2,8.3-1.1,1.3-7.9-.8-11.3-3.5-1.5-1.1-5.3-5.5-8.5-9.7-7.5-9.9-9.8-11.9-11.3-10.4-.9.9-.5,2,1.8,4.4,1.7,1.8,5.1,6,7.6,9.3,8.3,10.9,12.2,13.5,20.2,13.5a12.38,12.38,0,0,1,7.6,2.5c1.9,1.4,3.9,2.5,4.6,2.5s5.2,5.3,10.1,11.7,11,14,13.6,16.8,5.1,6.2,5.4,7.6a5,5,0,0,0,3.2,3.6c3.4,1.2,22.1,14.3,22.1,15.4,0,.5-.9,1.3-2,1.9a3.57,3.57,0,0,0-2,2.6c0,1.2.8,1,4-.8l4-2.3,8.2,2.9c4.6,1.6,9.9,3.5,11.8,4.4l3.5,1.5-2.9.6c-3.5.7-4.7,3.1-1.7,3.1,2.7,0,2.7,2.2.1,4.5-2.2,2-2.8,6.9-.7,6.3.6-.2,2.6-3.1,4.2-6.3s3.7-6.1,4.5-6.3,5.5,3.9,10.6,9.1c5.4,5.6,10.9,10.2,13.6,11.6,8.6,4.1,6.8,7.8-5,10.5-4.9,1.1-8.2,1.3-12.2.6-12.4-1.9-50.3-10.3-61.5-13.5-6.6-1.9-16.9-4.4-23-5.5s-12-2.3-13.2-2.5c-2-.5-4.1,1-3,2.1.2.3,6.9,1.8,14.8,3.4s19,4.3,24.5,5.9,18.4,4.6,28.5,6.6c20,3.9,29.9,6.4,29.9,7.4,0,1.7-7,7.2-12,9.5-6.6,3.1-17.6,3.5-27.8,1.1-9-2.1-31.3-9.5-33.9-11.2a6.52,6.52,0,0,0-5.1-.9c-3.3.9-30.3.8-42.4,0-7.6-.6-8.8-.4-8.8.9,0,2.4,2.9,2.9,24.9,3.8,27.4,1.1,32.1,1.8,48.8,7.2,17.9,5.8,28.9,7.5,38,5.8,7.9-1.4,11.2-3,17.5-8.2,2.6-2.2,5.3-3.9,6-3.9a3.64,3.64,0,0,0,2.3-.9c.6-.5,4.3-1.6,8.4-2.5a48.8,48.8,0,0,0,12-4.4c10.3-6.4,24-12.5,29-13,2.8-.2,5.1-.8,5.1-1.3s1.3-.9,2.9-.9,3.3-.5,3.6-1a1.1,1.1,0,0,1,1.5-.5,1,1,0,0,0,1.4-.4c.3-.5,5.1.6,10.7,2.5,12.4,4.2,22.6,5.8,29.4,4.5,2.8-.5,10.2-1.3,16.5-1.6a179.78,179.78,0,0,0,21-2.6c5.2-1,12.7-2.1,16.5-2.5a71.25,71.25,0,0,0,12-2c2.8-.8,10.2-1.7,16.5-1.9,17.8-.8,20.1-1.2,38.2-7,9.2-3,19.2-5.7,22.1-6.1s9.5-1.5,14.9-2.5a109.62,109.62,0,0,1,13.7-1.9h4.1"/><path className={classes.BranchesGap} d="M1341.5,147.64c-4.2-1.5-8.9-5.1-16.3-12.5-3.5-3.5-7.7-7-9.5-7.9l-3.1-1.7,4.2-3.9c3.8-3.5,4.6-3.8,8-3.3,25.3,4.1,36.9,7.7,45.5,14.1,4.6,3.3,4.8,3.7,3.4,5.7-2,3.2-14.7,8.2-16.9,6.8-1.5-.9-1.8-.8-1.8.8C1355,148.64,1347.5,149.74,1341.5,147.64Z"/><path className={classes.BranchesGap} d="M1409.8,146.44c-5.1-1.2-20.6-6.4-21.7-7.2-.2-.2,2.2-4.3,5.4-9.1,6.4-9.6,14.6-18.7,20.3-22.6,3.4-2.3,4.2-2.4,10-1.6a116.93,116.93,0,0,1,15.7,4c7.9,2.6,9.4,3.5,10,5.6s1,2.4,3.5,1.8,3-.4,3,1.5c0,1.7.4,2,1.8,1.5,8.6-3.6,15.6-4.4,40.2-4.6,16.6-.1,17.8,0,23.9,2.5,7,2.8,13.4,7.2,12.6,8.6-1.5,2.5-14.8,5.2-31.5,6.5a252.48,252.48,0,0,0-29,3.8c-6.3,1.4-18,3.5-26,4.8s-16.3,2.8-18.4,3.6A37.87,37.87,0,0,1,1409.8,146.44Z"/><path className={classes.BranchesGap} d="M249,138.84c-2.6-.4-3.6-1.1-4-3-.5-2.2-.7-2.3-1.6-.8s-1.6,1.5-8.7-1.4c-6-2.4-7.9-3.6-8.3-5.5-.8-3,.4-4.3,6.5-7.7,7.3-3.9,15-6.4,28.9-9.1,16.1-3.3,17.1-3.2,21,.8,1.8,1.8,3.2,3.6,3.2,4s-1.2,1.3-2.7,2.1-5.7,4.4-9.3,8.1C263.7,136.84,257.2,140.14,249,138.84Z"/><path className={classes.BranchesGap} d="M166.8,135.34c-4.7-1.3-13.5-3.1-19.5-4s-16.9-2.9-24.3-4.5a162.55,162.55,0,0,0-25.6-3.4,150.89,150.89,0,0,1-17.5-1.7c-6.5-1.2-14.9-4.1-14.9-4.9,0-1.1,5.8-4.9,11.7-7.7l5.8-2.7H113c22.6-.1,31.1-.4,32.7-1.4,4.2-2.4,24.8-8.3,31-8.9,5.2-.5,6.7-.2,9.7,1.6,4.8,3,13.4,12.6,20.2,22.8,4.6,6.8,5.4,8.7,4.3,9.4a117.25,117.25,0,0,1-12.1,4.4C185.9,138.54,179.6,138.74,166.8,135.34Z"/></svg>
    <h1 className={classes.Title}>
      <Link className={classes.Link} to="/MeaningfulNonsense">
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
