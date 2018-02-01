import React, {Component} from 'react';
import {connect} from 'react-redux';
import RouteListItem from './RouteListItem';
import {getAllRoutes, getRoute} from '../../api/muni'
import {getRoutes} from '../../actions/actions';
// import TransitionGroup from 'react-addons-transition-group';
import {TweenMax} from 'gsap';
import './routelist.css';

class RouteListContainer extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    this.props.dispatch(getRoutes());
  }

  renderRouteListItems(routeItems = []) {
    const routeItemsToRender = [];
    for (let [,item] of Object.entries(routeItems)) {
      routeItemsToRender.push(<RouteListItem tag={item.tag} title={item.title} key={item.tag} />)
    }

    console.log(routeItemsToRender);
    return routeItemsToRender;
  }

  render() {
    const routes = this.props.routes ? this.props.routes.byTag : null;
    console.log(routes);
    const routeItems = this.renderRouteListItems(routes);


    const classes = this.props.onSuccess ? "route-list-container is-active" : "route-list-container";
    return (
      <div className={classes}>
        {routeItems}
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    routes: state.routes.routes,
    onSuccess: state.routes.getRoutesSuccess
  };
}

export default connect(mapStateToProps)(RouteListContainer);
