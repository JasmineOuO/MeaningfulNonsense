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
    const linkStyles = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      textDecoration: 'none',
      zIndex: '3',
      backgroundColor: '#FFF',
      opacity: '0',
      filter: 'alpha(opacity=1)',
    }
    const imgStyles= {
      boxShadow: '0 0 0.5px 0.1px rgba(0,0,0,0.5)',
      width: '100%',
    }
    const { post } = this.props;
    return (
        <div
          className={classes.FlipContainer}
          key={post.id}
        >
          <div className={classes.Flipper}>
            <div className={classes.Front}>
              <a className={classes.Polaroid} title={post.frontmatter.title}>
                  <Image style={imgStyles} className={classes.Image} imageInfo={{image: post.frontmatter.thumbnail}}/>
              </a>
            </div>
            <div className={classes.Back}>
              <h1>{post.excerpt}</h1>
              <a className={classes.Polaroid} title={post.frontmatter.date}></a>
              <div className={classes.Link}>
                <Link to={post.fields.slug} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Polaroid;
