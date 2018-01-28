import React, {Component} from 'react';
import {getAllRoutes} from '../../api/muni'
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax} from 'gsap';
import './routelist.css';

class RouteListContainer extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    getAllRoutes().then(routes => {
      console.log(routes);
      this.setState({
        isVisible: true
      });
    });
  }

  render() {
    const classes = this.state.isVisible ? "route-list-container is-active" : "route-list-container";

    return (
      <div className={classes}>
        <RouteListItem tag="E" title="E-Embarcadero" />
        <RouteListItem tag="E" title="E-Embarcadero" />
        <RouteListItem tag="E" title="E-Embarcadero" />
        <RouteListItem tag="E" title="E-Embarcadero" />
        <RouteListItem tag="E" title="E-Embarcadero" />

      </div>
    )
  }
}

class RouteListItem extends Component {
  componentWillEnter(callback) {

  }

  render() {
    return (
      <div className="route-list-item">
        <span>{this.props.tag}</span><span>{this.props.title}</span>
      </div>
    )
  }
}

class Test extends Component {

  componentWillEnter (callback) {
    TweenMax.fromTo(this.container, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    TweenMax.fromTo(this.container, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render() {
    return (
      <div className="test" ref={container => this.container = container }>
        <p>this is a test</p>
      </div>
    );
  }
}

export default RouteListContainer;
