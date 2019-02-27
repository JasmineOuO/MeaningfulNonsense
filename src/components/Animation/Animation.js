import { Component } from 'react';
import Particle from './Particle.js';

export default class Animation extends Component {
  componentDidMount() {
    new Particle(this.props).doStart();
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
