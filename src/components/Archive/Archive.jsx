/*eslint-disable*/
import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';

import Animation from '../Animation/Animation';
import 'rc-slider/assets/index.css';
import classes from './Archive.module.css';

const defaultSliderProps = {
  className: 'slider',
  trackStyle: {
    backgroundColor: '#e8c5d6',
    height: 4
  },
  dotStyle: {
    borderColor: '#e9e9e9',
    backgroundColor: '#e9e9e9'
  },
  activeDotStyle: {
    borderColor: '#e8c5d6',
    backgroundColor: '#e8c5d6'
  }
}

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2018,
      season: 'all',
      selectYear: false
    };
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

  mapSeasonToValue = (season) => {
    switch (season) {
      case 'all':
        return 0;
      case 'winter':
        return 25;
      case 'spring':
        return 50;
      case 'summer':
        return 75;
      case 'autumn':
        return 100;
    }
  }

  mapSeasonToProps = (season) => {
    switch (season) {
      case 'winter':
        return {
          className: 'snowflake',
          custom: true,
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

  customSliderProps = (year, season, selectYear) => (
    selectYear ? ({
      min: 2016,
      max: 2022,
      step: 1,
      defaultValue: 2018,
      value: year,
      onChange: this.handleYearChange
    }) : ({
      min: 0,
      step: null,
      defaultValue: 0,
      value: this.mapSeasonToValue(season),
      marks: {
        0: 'all',
        25: 'winter',
        50: 'spring',
        75: 'summer',
        100: 'autumn'
      },
      onChange: this.handleSeasonChange
    })
  )

  handleSeasonChange = (value) => {
    const season = this.mapValueToSeason (value);
    this.setState({ season });
  }

  handleYearChange =  (year) => {
    this.setState({ year });
  }

  handleClick = () => {
    this.setState(prevState => ({ selectYear: !prevState.selectYear }));
  }

  render() {
    const { year, season, selectYear } = this.state;
    const sliderProps = Object.assign({}, defaultSliderProps, this.customSliderProps(year, season, selectYear));
    const animationProps = this.mapSeasonToProps(season);
    return (
      <div className={classes.Archive}>
        <Animation {...animationProps} />
        <div className={classes.Slider}>
          <Slider {...sliderProps} />
          <div className={classes.Label} onClick={this.handleClick}>{year}</div>
        </div>
        <div className={classes.Message} />
      </div>
    );
  }
}

export default Archive;
