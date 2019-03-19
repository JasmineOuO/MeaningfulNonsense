/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from 'gatsby';

import classes from './Polaroid.module.css';
import Image from '../Image';

class Polaroid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, type } = this.props;
    let frontText,
      backText,
      thumbnail,
      date,
      link = '';
    let id = item.id;
    if (type === 'post') {
      frontText = item.frontmatter.label;
      date = item.frontmatter.date;
      backText = item.frontmatter.title;
      thumbnail = item.frontmatter.thumbnail;
      link = item.fields.slug;
    } else if (type === 'photo') {
      frontText = item.title;
      date = item.date;
      backText = item.location;
      thumbnail = item.image;
    } else if (type === 'about') {
      frontText = item.name;
      date = item.caption;
      backText = item.blurb;
      thumbnail = item.image;
    }

    return (
      <div className={classes.FlipContainer} key={id}>
        <div className={classes.Flipper}>
          <div className={classes.Front}>
            <a className={classes.Polaroid} title={frontText}>
              <Image className={classes.Image} imageInfo={{ image: thumbnail }} />
            </a>
          </div>
          <div className={classes.Back}>
            <h1>{backText}</h1>
            <a className={classes.Polaroid} title={date} />
            {type === 'post' && (
              <div className={classes.Link}>
                <Link to={link} title={frontText} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Polaroid;
