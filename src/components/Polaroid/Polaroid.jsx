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
    const dateStyles = {
      width: 'calc(100% - 16px)',
      position: 'absolute',
      bottom: 10,
      left: 8,
      background: '#efefef',
      borderRadius: 3,
      boxShadow: 'none',
      border: 'none',
      padding: '0px 10px 7px 10px',
      marginTop: 10,
    }
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
              <a className={classes.Polaroid} title={post.frontmatter.title} style={{ display: 'block' }}>
                  <Image style={imgStyles} className={classes.Image} imageInfo={{image: post.frontmatter.thumbnail}}/>
              </a>
            </div>
            <div className={classes.Back} style={{paddingTop: `${100/post.frontmatter.thumbnail.childImageSharp.fluid.aspectRatio}%`}}>
              <h1 style={{ position: 'absolute', top:0, left:0 }}>{post.excerpt}</h1>
              <a 
                style={dateStyles}
                className={classes.Polaroid} 
                title={post.frontmatter.date}
              ></a>
              <Link style={linkStyles} to={post.fields.slug} />
            </div>
          </div>
        </div>
    );
  }
}

export default Polaroid;
