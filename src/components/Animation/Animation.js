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
    const { className } = this.props;
    Array.from(document.getElementsByClassName(className)).forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }

  render() {
    return null;
  }
}
