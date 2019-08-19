/*eslint-disable*/
import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';

import Gallery from '../Gallery/Gallery';
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
};

const seasons = {
  ALL: 'all',
  SUMMER: 'summer',
  WINTER: 'winter',
  SPRING: 'spring',
  AUTUMN: 'autumn'
};

const archiveLabel = {
    RECENT: 'recent',
    DISPLAY_YEAR: 'display_year',
    SELECT_YEAR: 'select_year'
}

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      season: seasons.ALL,
      selectYear: archiveLabel.RECENT,
    };
  }

  filterPosts = allPosts => {
    const { year, season, selectYear } = this.state;
    return selectYear == archiveLabel.RECENT && season === seasons.ALL
    ?  allPosts.slice(0,20) 
    : allPosts.filter(post => {
      if (selectYear == archiveLabel.RECENT || year.toString().substr(-2) === post.node.frontmatter.date.substr(-2)) {
        if (season === seasons.ALL) {
          return true;
        }
        switch (parseInt(post.node.frontmatter.date.substr(3, 2))) {
          case 12:
          case 1:
          case 2:
            return season === seasons.WINTER;
          case 3:
          case 4:
          case 5:
            return season === seasons.SPRING;
          case 6:
          case 7:
          case 8:
            return season === seasons.SUMMER;
          case 9:
          case 10:
          case 11:
            return season === seasons.AUTUMN;
        }
      }
      return false;
    });
  };

  mapValueToSeason = value => {
    switch (value) {
      case 0:
        return seasons.ALL;
      case 25:
        return seasons.WINTER;
      case 50:
        return seasons.SPRING;
      case 75:
        return seasons.SUMMER;
      case 100:
        return seasons.AUTUMN;
    }
  };

  mapSeasonToValue = season => {
    switch (season) {
      case seasons.ALL:
        return 0;
      case seasons.WINTER:
        return 25;
      case seasons.SPRING:
        return 50;
      case seasons.SUMMER:
        return 75;
      case seasons.AUTUMN:
        return 100;
    }
  };

  mapSeasonToProps = season => {
    switch (season) {
      case seasons.WINTER:
        return {
          className: 'snowflake',
          custom: true,
          fallSpeed: 1.5,
          minSize: 7,
          maxSize: 12,
          newOn: 1000
        };
      case seasons.ALL:
      case seasons.SPRING:
        return {
          className: seasons.SPRING,
          fallSpeed: 1,
          minSize: 9,
          maxSize: 14,
          newOn: 1200
        };
      case seasons.SUMMER:
        return {
          className: seasons.SUMMER,
          fallSpeed: 1,
          minSize: 12,
          maxSize: 16,
          newOn: 1200
        };
      case seasons.AUTUMN:
        return {
          className: seasons.AUTUMN,
          fallSpeed: 1.3,
          minSize: 12,
          maxSize: 16,
          newOn: 1100
        };
    }
  };

  customSliderProps = (year, season, selectYear) =>
    selectYear == archiveLabel.SELECT_YEAR
      ? {
          min: 2016,
          max: 2022,
          step: 1,
          defaultValue: 2018,
          value: year,
          onChange: this.handleYearChange
        }
      : {
          min: 0,
          step: null,
          defaultValue: 0,
          value: this.mapSeasonToValue(season),
          marks: {
            0: seasons.ALL,
            25: seasons.WINTER,
            50: seasons.SPRING,
            75: seasons.SUMMER,
            100: seasons.AUTUMN
          },
          onChange: this.handleSeasonChange
        };

  handleSeasonChange = value => {
    const season = this.mapValueToSeason(value);
    this.setState({ 
        season,
        selectYear: archiveLabel.DISPLAY_YEAR
    });
  };

  handleYearChange = year => {
    this.setState({ year });
  };

  handleClick = () => {
    this.setState(prevState => ({ 
        selectYear: prevState.selectYear == archiveLabel.RECENT ? archiveLabel.DISPLAY_YEAR : (
            prevState.selectYear == archiveLabel.DISPLAY_YEAR ? archiveLabel.SELECT_YEAR : archiveLabel.RECENT
    )}));
  };

  render() {
    const { year, season, selectYear } = this.state;
    const sliderProps = Object.assign(
      {},
      defaultSliderProps,
      this.customSliderProps(year, season, selectYear)
    );
    const animationProps = this.mapSeasonToProps(season);
    const posts = this.filterPosts(this.props.posts);
    const message = posts.length === 0 ? `No posts in ${season} of ${year}` : '';
    return (
      <div className={classes.Archive}>
        <Animation {...animationProps} />
        <div className={classes.Slider}>
          <Slider {...sliderProps} />
          <div className={classes.Label} onClick={this.handleClick}>
            {selectYear == archiveLabel.RECENT ? "new posts" : year}
          </div>
        </div>
        <Gallery items={posts} type="post" numCols={4} />
        <div className={classes.Message}>{message}</div>
      </div>
    );
  }
}

export default Archive;
