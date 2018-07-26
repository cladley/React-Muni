import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RouteDetails from "./RouteDetails";
import { activateDirection, closeRoute, stopHovered, stopSelected } from "../../actions/actions";
import { createStopsViewUrl } from "../../api/muni";

class RouteDetailsContainer extends Component {
  directionChange = tag => {
    this.props.dispatch(activateDirection(tag));
  };

  close = () => {
    this.props.dispatch(closeRoute(this.props.activeRoute));
  };

  onStopHovered = stop => {
    this.props.dispatch(stopHovered(stop.tag));
  };

  onStopSelected = stop => {
    this.props.history.push(
      createStopsViewUrl(this.props.activeRoute.tag, stop.tag)
    );
  };

  render() {
    return (
      <RouteDetails
        route={this.props.activeRoute}
        direction={this.props.activeDirection}
        onDirectionChange={this.directionChange}
        close={this.close}
        onStopHovered={this.onStopHovered}
        onStopSelected={this.onStopSelected}
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

export default connect(mapStateToProps)(withRouter(RouteDetailsContainer));
