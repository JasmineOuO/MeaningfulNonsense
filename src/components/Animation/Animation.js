import { Component } from 'react';
import Particle from './Particle.js';

export default class Animation extends Component {
  constructor(props, context) {
    super(props, context);
    this.animation = new Particle(props);
  }

  componentDidMount() {
    this.animation.doStart();
  }

  componentWillUnmount() {
    this.animation.stop();
    Array.from(document.getElementsByClassName('spring')).forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }

  render() {
    return null;
  }
}
