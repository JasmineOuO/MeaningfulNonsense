import React, { Component } from 'react';

import classes from './Navbar.module.css';
import Navitem from '../Navitem/Navitem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { hamburgerOpened: false };
  }

  handleClick = () => {
    const { hamburgerOpened } = this.state;
    this.setState({ hamburgerOpened: !hamburgerOpened });
  }

  render() {
    const { navLinks } = this.props;
    const { hamburgerOpened } = this.state;
    return (
      <nav className={classes.Navbar}>
        {
          navLinks.map(navLink => (
            <Navitem
              key={navLink.name}
              name={navLink.name}
              link={navLink.link}
              navLinks={navLink.navLinks}
              hamburgerOpened={hamburgerOpened}
            />
          ))
        }
        <div className={classes.HamburgerIcon}>
          <button className={hamburgerOpened ? `${classes.Hamburger} ${classes.HamburgerSlider} ${classes.Active}` : `${classes.Hamburger} ${classes.HamburgerSlider}`} type="button" onClick={this.handleClick}>
            <span className={classes.HamburgerBox}>
              <span className={classes.HamburgerInner} />
            </span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
