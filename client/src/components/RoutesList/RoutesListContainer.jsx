import React, { Component } from "react";
import { connect } from "react-redux";
import RouteListItem from "./RouteListItem";
import { getRoutes, getRouteByTag } from "../../actions/actions";
import { Transition } from "react-transition-group";
import { isEmpty } from "lodash";

// import TransitionGroup from 'react-addons-transition-group';
import { TweenMax } from "gsap";
import "./routelist.css";

const ROUTE_LIST_ITEM = ".route-list-item";

export class RouteListContainer extends Component {
  state = {
    isInitialLoad: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getRoutes());
  }

  componentDidUpdate(prevProps) {
    if (isEmpty(prevProps.routes.byTag)) {
      const items = Array.from(document.querySelectorAll(ROUTE_LIST_ITEM));

      TweenMax.staggerFromTo(
        items.slice(0, 10),
        0.35,
        { opacity: "0", y: "+10px" },
        { opacity: "1", y: "0" },
        0.1,
        () => {
          this.setState({
            isInitialLoad: true
          });
        }
      );
    }
  }

  onRouteClicked(tag) {
    this.props.dispatch(getRouteByTag(tag));
  }

  renderRouteListItems(routeItems = {}) {
    const routeItemsToRender = [];

    for (let [, item] of Object.entries(routeItems)) {
      routeItemsToRender.push(
        <RouteListItem
          tag={item.tag}
          title={item.title}
          color={item.color}
          oppositeColor={item.oppositeColor}
          key={item.tag}
          onRouteClick={tag => this.onRouteClicked(tag)}
        />
      );
    }
    return routeItemsToRender;
  }

  filterRouteListItems(routeItems = {}) {
    if (this.props.searchTerm === "") {
      return routeItems;
    }

    const filteredItems = {};

    for (let [key, item] of Object.entries(routeItems)) {
      if (item.title.toLowerCase().match(this.props.searchTerm)) {
        filteredItems[key] = item;
      }
    }
    return filteredItems;
  }

  render() {
    const routes = this.props.routes ? this.props.routes.byTag : undefined;
    const routeItems = this.renderRouteListItems(
      this.filterRouteListItems(routes)
    );

    const classes = this.state.isInitialLoad
      ? "route-list-container is-active"
      : "route-list-container";
    return <div className={classes}>{routeItems}</div>;
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    onSuccess: state.routes.getRoutesSuccess,
    searchTerm: state.routes.searchTerm
  };
};

export default connect(mapStateToProps)(RouteListContainer);
