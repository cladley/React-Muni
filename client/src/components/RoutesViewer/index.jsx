import React, { Component } from "react";
import { connect } from "react-redux";
import TransitRoute from "../TransitRoute";
import { getVehicleLocations } from '../../api/muni';
import { getRouteVehicleLocations } from '../../actions/actions';

class RoutesViewer extends Component {
  state = { liveVehicles: false};

  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.onSendVehicleRequest = this.onSendVehicleRequest.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { activeRoute, activeDirection } = nextProps;
    // TODO: refactor into own class. VehicleTracker or something like that.
    if (activeRoute) {
      if (!this.state.liveVehicles) {
        this.setState({
          liveVehicles: true,
        }, () => {
          clearInterval(this.timeoutId);
          this.props.dispatch(getRouteVehicleLocations(activeRoute.tag));
          this.timeoutId = setInterval(this.onSendVehicleRequest, 5000);
        });
      }
    } else {
      if (nextState.liveVehicles !== false) {
        this.setState({
          liveVehicles: false
        });
        clearInterval(this.timeoutId);
      }
    }

    return true;
  }

  onSendVehicleRequest() {
    this.props.dispatch(getRouteVehicleLocations(this.props.activeRoute.tag, this.props.activeVehicles.lastTime.time));
  }

  render() {
    return (
      <TransitRoute
        route={this.props.activeRoute}
        direction={this.props.activeDirection}
        vehicles={this.props.activeVehicles}
        hoveredStop={this.props.hoveredStop}
      />
    );
  } 
}

const mapStateToProps = state => {
  return {
    activeDirection: state.routes.currentActiveDirection,
    activeRoute: state.routes.routes.byTag[state.routes.currentActiveRoute],
    activeVehicles: state.routes.vehicles,
    hoveredStop: state.stops.hoveredStop
  };
};

export default connect(mapStateToProps)(RoutesViewer);
