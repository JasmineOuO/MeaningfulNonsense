/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from 'gatsby';

import classes from './Polaroid.module.css';
import Image from '../Image';

class Polaroid extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { post, type } = this.props;
    let title, backText, thumbnail = '';
    let date = post.frontmatter.date;
    let link = '/';
    let id = post.id;
    if (type === 'post') {
      title = post.frontmatter.title;
      date = post.frontmatter.date;
      backText = post.excerpt;
      thumbnail = post.frontmatter.thumbnail;
      link = post.fields.slug;
    } else {
      const { caption, description, image } = this.props;
      title = caption;
      backText = description;
      thumbnail = image;
    }

    return (
      <div
        className={classes.FlipContainer}
        key={id}
      >
        <div className={classes.Flipper}>
          <div className={classes.Front}>
            <a className={classes.Polaroid} title={title}>
                <Image className={classes.Image} imageInfo={{image: thumbnail}}/>
            </a>
          </div>
          <div className={classes.Back}>
            <h1>{backText}</h1>
            <a className={classes.Polaroid} title={date}></a>
            <div className={classes.Link}>
              <Link to={link} title={title} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Polaroid;
