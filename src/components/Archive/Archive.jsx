import React, { Component } from 'react';
import classes from './Archive.module.css';
import Slider from '../Slider/Slider';

class Archive extends Component {
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
      <div className={classes.Archive}>
        <Slider />
        <select classesName={classes.Select} onChange={() => this.setState({ year: (this.options[this.selectedIndex].text), season: 'change' })}>
          <option selected>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
        </select>
        <div className={classes.Message} />
      </div>
    );
  }
}

export default Archive;
