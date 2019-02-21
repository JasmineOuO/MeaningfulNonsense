import React, { Component } from 'react';

import classes from './Navbar.module.css';
import Navitem from './Navitem/Navitem';

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
        <button aria-label="Expand navigation bar" type="button" className={hamburgerOpened ? `${classes.HamburgerIcon} ${classes.Hamburger} ${classes.HamburgerSlider} ${classes.Active}` : `${classes.HamburgerIcon} ${classes.Hamburger} ${classes.HamburgerSlider}`} onClick={this.handleClick}>
          <div className={classes.HamburgerBox}>
            <div className={classes.HamburgerInner} />
          </div>
        </button>
      </nav>
    );
  }
}

export default Navbar;
