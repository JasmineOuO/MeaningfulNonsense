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
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    const { name, link, navLinks } = this.props;
    return (
      <div
        key={name}
        className={classes.Navitem}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link
          to={link}
          className={navLinks.length === 0 ? classes.Btn : classes.Dropbtn}
          activeStyle={{ backgroundColor: '#e8b4cd' }}
          title={name}
          key={name}
        >
          {name}
        </Link>
        <Dropdown navLinks={navLinks} isHovered={isHovered} />
      </div>
    );
  }
}

export default Navitem;
