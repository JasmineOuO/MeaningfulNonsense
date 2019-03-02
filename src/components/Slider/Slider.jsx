/* eslint-disable */
import React, { Component } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import classes from './Slider.module.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: 'spring',
      year: 2018,
    };
  }

  increaseYear = () => {
    this.setState(prevState => ({
      ...prevState.season, year: prevState.year + 1,
    }));
  }

  decreaseYear = () => {
    this.setState(prevState => ({
      ...prevState.season, year: prevState.year - 1,
    }));
  }

  changeSeason = (season) => {
    console.log(season);
    this.setState(prevState => ({
      season, ...prevState.year,
    }));
  }

  render() {
    const { isHovered } = this.props;
    const { season, year } = this.state;
    const YearClasses = [classes.Year];
    if (isHovered) {
      YearClasses.push(classes.Active);
    }
    const selectedClasses = [classes.Selected, classes.Active];
    const winterClasses = [];
    const springClasses = [];
    const summerClasses = [];
    const autumnClasses = [];
    switch (season) {
      case 'winter':
        winterClasses.push(selectedClasses);
        break;
      case 'spring':
        springClasses.push(selectedClasses);
        winterClasses.push(classes.Selected);
        break;
      case 'summer':
        summerClasses.push(selectedClasses);
        springClasses.push(classes.Selected);
        winterClasses.push(classes.Selected);
        break;
      case 'autumn':
        autumnClasses.push(selectedClasses);
        summerClasses.push(classes.Selected);
        springClasses.push(classes.Selected);
        winterClasses.push(classes.Selected);
        break;
      default:
        break;
    }
    return (
      <div className={classes.Slider}>
        <div className={YearClasses.join(' ')}>
          <div className={classes.YearUp} onClick={this.increaseYear}><FaAngleUp /></div>
          <div className={classes.YearDown} onClick={this.decreaseYear}><FaAngleDown /></div>
        </div>
        <div className={classes.Range}>
          <input type="range" min="1" max="5" steps="1" defaultValue="1" />
        </div>
        <ul className={classes.Labels}>
          <li data-season="all" id="year" className={classes.Selected} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{year}</li>
          <li data-season="winter" className={winterClasses} onClick={() => this.changeSeason('winter')}>winter</li>
          <li data-season="spring" className={springClasses} onClick={() => this.changeSeason('spring')}>spring</li>
          <li data-season="summer" className={summerClasses} onClick={() => this.changeSeason('summer')}>summer</li>
          <li data-season="autumn" className={autumnClasses} onClick={() => this.changeSeason('autumn')}>autumn</li>
        </ul>
      </div>
    );
  }
}

export default Slider;
