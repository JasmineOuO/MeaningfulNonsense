import { Component } from 'react';
import Particle from './Particle.js';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { particle: null };
  }

  componentDidMount = () => {
    const particle = new Particle(this.props);
    this.setState({ particle });
    particle.doStart();
  };

  componentDidUpdate = () => {
    const { particle } = this.state;
    particle.morph(this.props);
  };

  componentWillUnmount = () => {
    const { particle } = this.state;
    particle.doStop();
  };

  render() {
    return null;
  }
}
