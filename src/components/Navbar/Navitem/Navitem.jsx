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
    const { name, link, navLinks, hamburgerOpened, hide, first } = this.props;
    const navitemClasses = [classes.Navitem];
    if (first) {
      navitemClasses.push(classes.Push);
    }
    if (hamburgerOpened) {
      navitemClasses.push(classes.Responsive);
    } else if (hide) {
      navitemClasses.push(classes.Hide);
    }
    return (
      <div
        key={name}
        className={navitemClasses.join(' ')}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {navLinks.length === 0 ? (
          <Link
            to={link}
            className={classes.Btn}
            title={name}
            key={name}
            style={name === 'home' ? { display: 'block' } : {}}
            activeStyle={{ backgroundColor: '#e8b4cd' }}
          >
            {name}
          </Link>
        ) : (
          <Link
            to={link}
            className={classes.Dropbtn}
            title={name}
            key={name}
            activeStyle={{ backgroundColor: '#e8b4cd' }}
            partiallyActive
          >
            {name}
          </Link>
        )}
        <Dropdown navLinks={navLinks} isHovered={isHovered} hamburgerOpened={hamburgerOpened} />
      </div>
    );
  }
}

export default Navitem;
