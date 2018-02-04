import React, {Component} from 'react';
import {connect} from 'react-redux';
import RouteListItem from './RouteListItem';
import {getAllRoutes, getRoute} from '../../api/muni'
import {getRoutes} from '../../actions/actions';
import {Transition} from 'react-transition-group'

// import TransitionGroup from 'react-addons-transition-group';
import {TweenMax} from 'gsap';
import './routelist.css';

class RouteListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getRoutes());
  }

  componentDidUpdate(prevProps) {
    TweenMax.staggerFromTo('.route-list-item', .35, {opacity: '0', y: '+10px'}, {opacity: '1', y: '0'}, 0.1);
  }

  renderRouteListItems(routeItems = []) {
    const routeItemsToRender = [];
    for (let [,item] of Object.entries(routeItems)) {
      routeItemsToRender.push(<RouteListItem tag={item.tag} title={item.title} key={item.tag} />)
    }
    return routeItemsToRender;
  }

  render() {
    const routes = this.props.routes ? this.props.routes.byTag : null;
    const routeItems = this.renderRouteListItems(routes);

    const classes = this.props.onSuccess ? "route-list-container is-active" : "route-list-container";
    return (
      <div className={classes}>
        {routeItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    routes: state.routes.routes,
    onSuccess: state.routes.getRoutesSuccess
  };
}

export default connect(mapStateToProps)(RouteListContainer);
