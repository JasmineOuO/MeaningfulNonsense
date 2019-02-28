import React, { Component } from 'react';
import classes from './Slider.module.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 'spring',
      year: 2018,
    };
  }

  componentDidUpdate() {
    const { season, year } = this.state; // TODO: change this
    this.setState = ({ season, year });
  }

  render() {
    return (
      <div className={classes.Slider}>
        <div className={classes.Range}>
          <input type="range" min="1" max="5" steps="1" value="1" />
        </div>
        <ul className={classes.Labels}>
          <li data-season="all" id="year" className={`${classes.Active} ${classes.Selected}`} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>2018</li>
          <li data-season="winter">winter</li>
          <li data-season="spring">spring</li>
          <li data-season="summer">summer</li>
          <li data-season="autumn">autumn</li>
        </ul>
      </div>
    );
  }
}

export default Slider;
