import React, { Component } from 'react';
import { Link } from 'gatsby';

import classes from './Navitem.module.css';
import Dropdown from '../Dropdown/Dropdown';

class Navitem extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
    const { name, link, navLinks, hamburgerOpened } = this.props;
    const navitemClasses = [classes.Navitem];
    if (hamburgerOpened) {
      navitemClasses.push(classes.Responsive);
    }
    return (
      <div
        key={`${name}${new Date().getTime()}`}
        className={navitemClasses.join(' ')}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {navLinks.length === 0 ? (
          <Link
            to={link}
            className={classes.Btn}
            activeStyle={{ backgroundColor: '#e8b4cd' }}
            title={name}
            key={`${name}${new Date().getTime()}`}
            style={name === 'home' ? { display: 'block' } : {}}
          >
            {name}
          </Link>
        ) : (
          <div className={classes.Dropbtn}>{name}</div>
        )}
        <Dropdown navLinks={navLinks} isHovered={isHovered} />
      </div>
    );
  }
}

export default Navitem;
