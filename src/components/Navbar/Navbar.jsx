import React, { Component } from 'react';

import classes from './Navbar.module.css';
import Navitem from './Navitem/Navitem';
import Search from '../Search/Search';

const searchIndices = [
  { name: `Photos`, title: `Photos`, hitComp: `PhotoHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` }
];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { hamburgerOpened: false, collapseSearch: true };
  }

  handleClick = () => {
    this.setState(prevState => ({
      hamburgerOpened: !prevState.hamburgerOpened
    }));
  };

  handleSearchClick = () => {
    this.setState(prevState => ({
      collapseSearch: !prevState.collapseSearch
    }));
  };

  render() {
    const { navLinks } = this.props;
    const { hamburgerOpened, collapseSearch } = this.state;
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
            hide={!collapseSearch}
          />
        ))}
        <div style={{ display: 'inline-block', width: `${collapseSearch ? '' : '100%'}` }}>
          <Search
            collapse={collapseSearch}
            indices={searchIndices}
            onClick={this.handleSearchClick}
          />
        </div>
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
