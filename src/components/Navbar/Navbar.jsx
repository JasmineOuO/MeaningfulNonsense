import React, { Component } from 'react';

import classes from './Navbar.module.css';
import Navitem from './Navitem/Navitem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { hamburgerOpened: false };
  }

  handleClick = () => {
    this.setState(prevState => ({
      hamburgerOpened: !prevState.hamburgerOpened
    }));
  };

  render() {
    const { navLinks } = this.props;
    const { hamburgerOpened } = this.state;
    const HamburgerClasses = [classes.Hamburger, classes.HamburgerIcon, classes.HamburgerSlider];
    if (hamburgerOpened) {
      HamburgerClasses.push(classes.Active);
    }
    return (
      <nav className={classes.Navbar}>
        {navLinks.map(navLink => (
          <Navitem
            key={navLink.name}
            name={navLink.name}
            link={navLink.link}
            navLinks={navLink.navLinks}
            hamburgerOpened={hamburgerOpened}
          />
        ))}
        <button
          aria-label="Expand navigation bar"
          type="button"
          className={HamburgerClasses.join(' ')}
          onClick={this.handleClick}
        >
          <div className={classes.HamburgerBox}>
            <div className={classes.HamburgerInner} />
          </div>
        </button>
      </nav>
    );
  }
}

export default Navbar;
