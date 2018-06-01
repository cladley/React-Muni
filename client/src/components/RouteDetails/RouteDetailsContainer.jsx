import React, { Component } from "react";
import { connect } from "react-redux";
import RouteDetails from "./RouteDetails";
import { activateDirection, closeRoute, stopHovered } from '../../actions/actions';

class RouteDetailsContainer extends Component {
  directionChange = (tag) => {
    this.props.dispatch(activateDirection(tag));
  };

  close = () => {
    this.props.dispatch(closeRoute(this.props.activeRoute));
  };

  onStopHovered = (stop) => {
    this.props.dispatch(stopHovered(stop.stopId));
  }

  render() {
    return (
      <RouteDetails
        route={this.props.activeRoute}
        direction={this.props.activeDirection}
        onDirectionChange={this.directionChange}
        close={this.close}
        onStopHovered={this.onStopHovered}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    activeRoute: state.routes.routes.byTag[state.routes.currentActiveRoute],
    activeDirection: state.routes.currentActiveDirection
  };
};

export default connect(mapStateToProps)(RouteDetailsContainer);
