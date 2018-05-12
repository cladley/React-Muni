import React, { Component } from "react";
import { connect } from "react-redux";
import RouteDetails from "./RouteDetails";
import { activateDirection, closeRoute } from '../../actions/actions';

class RouteDetailsContainer extends Component {
  directionChange = (tag) => {
    this.props.dispatch(activateDirection(tag));
  };

  close = () => {
    this.props.dispatch(closeRoute(this.props.activeRoute));
  };

  render() {
    return (
      <RouteDetails
        route={this.props.activeRoute}
        direction={this.props.activeDirection}
        onDirectionChange={this.directionChange}
        close={this.close}
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
