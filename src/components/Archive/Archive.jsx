/*eslint-disable*/
import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

import Animation from '../Animation/Animation';
import 'rc-slider/assets/index.css';
import classes from './Archive.module.css';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2018,
      season: 'all'
    };
  }

  increaseYear = () => {
    this.setState(prevState => ({
      year: prevState.year + 1, ...prevState.season
    }));
  }

  decreaseYear = () => {
    this.setState(prevState => ({
      year: prevState.year - 1, ...prevState.season
    }));
  }

  mapValueToSeason = (value) => {
    switch (value) {
      case 0:
        return 'all';
      case 25:
        return 'winter';
      case 50:
        return 'spring';
      case 75:
        return 'summer';
      case 100:
        return 'autumn';
    }
  }

  mapSeasonToProps = (season) => {
    switch (season) {
      case 'winter':
        return {
          className: 'winter',
          fallSpeed: 1.5,
          minSize: 7,
          maxSize: 12,
          newOn: 1000
        };
      case 'all':
      case 'spring':
        return {
          className: 'spring',
          fallSpeed: 1,
          minSize: 9,
          maxSize: 14,
          newOn: 1200
        };
      case 'summer':
        return {
          className: 'summer',
          fallSpeed: 1,
          minSize: 12,
          maxSize: 16,
          newOn: 1200
        };
      case 'autumn':
        return {
          className: 'autumn',
          fallSpeed: 1.3,
          minSize: 12,
          maxSize: 16,
          newOn: 1100
        };
    }  
  }

  onSliderChange = (value) => {
    const season = this.mapValueToSeason(value);
    this.setState(prevState => ({
       ...prevState.year, season 
    }));
  }

  render() {
    const { year, season } = this.state;
    const animationProps = this.mapSeasonToProps(season);
    return (
      <div className={classes.Archive}>
        <Animation {...animationProps} />
        <div className={classes.Year}>
          <div className={classes.YearUp} onClick={this.increaseYear}><FaAngleUp /></div>
          <div className={classes.YearDown} onClick={this.decreaseYear}><FaAngleDown /></div>
        </div>
        <div className={classes.Slider}>
          <Slider
            className='slider'
            min={0}
            defaultValue={0}
            marks={{ 0: `${year}`, 25: 'winter', 50: 'spring', 75: 'summer', 100: 'autumn' }}
            step={null}
            trackStyle={{ backgroundColor: '#e8c5d6', height: 4 }}
            dotStyle={{ borderColor: '#e9e9e9', backgroundColor: '#e9e9e9' }}
            activeDotStyle={{ borderColor: '#e8c5d6', backgroundColor: '#e8c5d6' }}
            onChange={this.onSliderChange}
          />
        </div>
        <div className={classes.Message} />
      </div>
    );
  }
}

export default Archive;
