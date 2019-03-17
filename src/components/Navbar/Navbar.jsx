import React, { Component } from 'react';

import { FaSearch } from 'react-icons/fa';
import classes from './Navbar.module.css';
import Navitem from './Navitem/Navitem';
import Search from '../Search/Search';

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Photos`, title: `Photos`, hitComp: `PhotoHit` }
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
    const NavbarClasses = [classes.Navbar];
    if (hamburgerOpened) {
      HamburgerClasses.push(classes.Active);
    }
    if (!collapseSearch) {
      NavbarClasses.push(classes.Hide);
    }
    return (
      <>
        <nav className={NavbarClasses.join(' ')}>
          {navLinks.map((navLink, index) => (
            <Navitem
              key={navLink.name}
              name={navLink.name}
              link={navLink.link}
              navLinks={navLink.navLinks}
              hamburgerOpened={hamburgerOpened}
              hide={!collapseSearch}
              first={index === 0}
            />
          ))}
          <div className={classes.SearchBar} style={{ width: `${collapseSearch ? '' : '100%'}` }}>
            <Search
              collapse={collapseSearch}
              indices={searchIndices}
              onClick={this.handleSearchClick}
            />
          </div>
          <FaSearch className={classes.SearchIcon} onClick={this.handleSearchClick} />
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
        <div
          className={`${classes.SearchBar} ${classes.Responsive}`}
          style={{ display: collapseSearch ? 'none' : 'block' }}
        >
          <Search
            collapse={collapseSearch}
            indices={searchIndices}
            onClick={this.handleSearchClick}
          />
        </div>
      </>
    );
  }
}

export default Navbar;
