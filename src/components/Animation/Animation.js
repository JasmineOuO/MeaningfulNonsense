import { Component } from 'react';
import Particle from './Particle.js';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { particle: new Particle(props) };
  }

  componentDidMount = () => {
    const { particle } = this.state;
    particle.doStart();
  }

  componentDidUpdate = () => {
    const { particle } = this.state;
    particle.morph(this.props);
  }

  componentWillUnmount = () => {
    const { className } = this.props;
    Array.from(document.getElementsByClassName(className)).forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }

  render() {
    return null;
  }
}
